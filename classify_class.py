#######
# IMPORT PACKAGES
#######

import praw
import pandas as pd
import spacy
from spacy.util import minibatch, compounding
import numpy
from bs4 import BeautifulSoup
import requests
def getDetails(query):

    # Acessing the reddit api

    reddit = praw.Reddit(client_id="Jf6IlAgZhc7Scw",#my client id
                        client_secret="ekm8wpxeYlG8a_2HPz4JS7jOWQA6ug",  #your client secret
                        user_agent="Standard_Roll8992", #user agent name
                        username = "",     # your reddit username
                        password = "")     # your reddit password

    sub = ['uAlberta']  # make a list of subreddits you want to scrape the data from

    for s in sub:
        subreddit = reddit.subreddit(s)   # Chosing the subreddit


    ########################################
    #   CREATING DICTIONARY TO STORE THE DATA WHICH WILL BE CONVERTED TO A DATAFRAME
    ########################################

    #   NOTE: ALL THE POST DATA AND COMMENT DATA WILL BE SAVED IN TWO DIFFERENT
    #   DATASETS AND LATER CAN BE MAPPED USING IDS OF POSTS/COMMENTS AS WE WILL 
    #   BE CAPTURING ALL IDS THAT COME IN OUR WAY

    # SCRAPING CAN BE DONE VIA VARIOUS STRATEGIES {HOT,TOP,etc} we will go with keyword strategy i.e using search a keyword


        num_max_comment_upvote = 0
        max_upvote_comment = ""
        #query = ['Cmput 401'] # default for now
        #class_num = input("Which class reviews do you want to see? ")
        #query = [class_num]
    
        for item in query:
            post_dict = {
                "title" : [],
                "score" : [],
                "id" : [],
                "url" : [],
                "comms_num": [],
                "created" : [],
                "body" : []
            }
            comments_dict = {
                "comment_id" : [],
                "comment_parent_id" : [],
                "comment_body" : [],
                "comment_link_id" : [],
                "upvotes" : []
            }
            for submission in subreddit.search(query,sort = "top",limit = None):
                post_dict["title"].append(submission.title)
                post_dict["score"].append(submission.score)
                post_dict["id"].append(submission.id)
                post_dict["url"].append(submission.url)
                post_dict["comms_num"].append(submission.num_comments)
                post_dict["created"].append(submission.created)
                post_dict["body"].append(submission.selftext)
            

                
                ##### Acessing comments on the post
                submission.comments.replace_more(limit = None)
                for comment in submission.comments.list():
                    comments_dict["comment_id"].append(comment.id)
                    comments_dict["comment_parent_id"].append(comment.parent_id)
                    comments_dict["comment_body"].append(comment.body)
                    comments_dict["comment_link_id"].append(comment.link_id)
                    comments_dict["upvotes"].append(comment.score)

                    if comment.score > num_max_comment_upvote and comment.body.strip() != "[deleted]":
                        max_upvote_comment = comment.body
                        num_max_comment_upvote = comment.score
                
            comments_dict["most_helpful_comment"] = max_upvote_comment
            print("Most upvotes: ", num_max_comment_upvote)

                    
                
            return post_dict, comments_dict
            
            # post_comments = pd.DataFrame(comments_dict)

            # post_comments.to_csv(s+"_comments_"+ item +"subreddit.csv")
            # post_data = pd.DataFrame(post_dict)
            # post_data.to_csv(s+"_"+ item +"subreddit.csv")

def predict(input_data: str = "no"):
    #  Load saved trained model
    loaded_model = spacy.load("model_artifacts_ensemble")
    # Generate prediction
    parsed_text = loaded_model(input_data)
    # Determine prediction to return
    if parsed_text.cats["pos"] > parsed_text.cats["neg"]:
        prediction = "Positive"
        score = parsed_text.cats["pos"]
    else:
        prediction = "Negative"
        score = parsed_text.cats["neg"]
    # print(
    #     f"Review text: {input_data}\nPredicted sentiment: {prediction}"
    #     f"\tScore: {score}"
    # )

    return prediction, score
def getdifficulty(tid):
    URL = 'https://www.ratemyprofessors.com/ShowRatings.jsp?tid='+ str(tid)
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, 'html.parser')
    elems = soup.find(id = 'root')
    res = elems.find_all('div',class_='FeedbackItem__FeedbackNumber-uof32n-1 kkESWs')
    if(len(res)>1):
        return str(res[1].text)
    return str(res[0].text)
def getpercentage(tid):
    URL = 'https://www.ratemyprofessors.com/ShowRatings.jsp?tid='+ str(tid)
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, 'html.parser')
    elems = soup.find(id = 'root')
    res = elems.find_all('div',class_='FeedbackItem__FeedbackNumber-uof32n-1 kkESWs')
    if(len(res)>1):
        return str(res[0].text)
    return "50"

#get all data for a prof, returns a tuple (rating,total_ratings,difficulty,percentageRetake)
def find_prof(name):
    f = open("data.txt","r")
    data = f.readlines()
    tid = ""
    rating = ""
    total_ratings = ""
    difficulty = ""
    percentageRetake = ""
    for i in range(0,len(data)):
        if(data[i].strip() == "professor name:"+name):
            tid = data[i+1].split(':')[1].strip()
            rating = data[i+2].split(':')[1].strip()
            total_ratings = data[i+3].split(':')[1].strip()
            difficulty = getdifficulty(tid)
            percentageRetake = getpercentage(tid)
            percentageRetake = percentageRetake[0:2]
            print(tid)
            print(rating)
            print(total_ratings)
            print(difficulty)
            print(percentageRetake)
    data = [rating,total_ratings,difficulty,percentageRetake]
    if(all(data)):
        return [rating,total_ratings,difficulty,percentageRetake]
    return False

def getCourseDifficulty(name,course):
    data = findcourse(course.lower())
    if(data):
        percentPosReviews = float(data[0])
        percentNegReviews = float(data[1])
        averagepositiveconfidence = float(data[2])
        averagenegativeconfidence = float(data[3])
    else:
        post_dict, comments_dict = getDetails(course)
        numNegativeReviews = 0
        numPositiveReviews = 0
        totalPositiveConfidence = 0
        totalNegativeConfidence = 0

        print("Number of Comments: ", len(comments_dict["comment_body"]))

        for comment in comments_dict["comment_body"]:
            review, score = predict(comment)

            if review == "Positive":
                numPositiveReviews += 1
                totalPositiveConfidence += score

            elif review == "Negative":
                numNegativeReviews += 1
                totalNegativeConfidence += score
        totalReviews = numPositiveReviews + numNegativeReviews
        if(totalReviews == 0):
            return False
        
        print(totalReviews)
        print("Number of Positive Reviews:", numPositiveReviews)
        print("Average Postive Review confidence:", totalPositiveConfidence/totalReviews)
        print("Number of Negative Reviews:", numNegativeReviews)
        print("Average Negative Review confidence:", totalNegativeConfidence/totalReviews)
        averagepositiveconfidence = totalPositiveConfidence/totalReviews
        averagenegativeconfidence = totalNegativeConfidence/totalReviews
        percentPosReviews = numPositiveReviews/totalReviews
        percentNegReviews = numNegativeReviews/totalReviews

    rateMyProfData = find_prof(name)
    if(rateMyProfData):
        level_rating = int(course.split(" ")[1])//100
        level_percentage = 1+(level_rating-1)*3
        w4 = 0.18
        w5 = 0.18
        w1 = (0.18+(1-averagepositiveconfidence)*w5/4+(1-averagenegativeconfidence)*w4/4)*(5-float(rateMyProfData[0]))*20
        w2 = (0.18+(1-averagepositiveconfidence)*w5/4+(1-averagenegativeconfidence)*w4/4)*float(rateMyProfData[2])*20
        w3 = (0.18+(1-averagepositiveconfidence)*w5/4+(1-averagenegativeconfidence)*w4/4)*(100-int(rateMyProfData[3]))
        w4 = 0.18*averagenegativeconfidence*percentNegReviews*100
        w5 = 0.18*averagepositiveconfidence*(1-percentPosReviews)*100
        w6 = (0.1+(1-averagepositiveconfidence)*w5/4+(1-averagenegativeconfidence)*w4/4)*level_percentage
        rating = w1+w2+w3+w4+w5+w6
        return rating
    return False

def updateconfidencedatabase():
    f = open("confidence.txt","w")
    courses = ["econ 101","stat 252", "econ 102", "stat 151", "cmput 175", "math 101", "math 114", "math 102", "phys 124", "soc 100", "cmput 301", "cmput 204", "math 125", "psyco 104", "chem 103", "biol 107", "math 225", "engl 102", "cmput 274", "cmput 275"]
    for course in courses:
        post_dict, comments_dict = getDetails(course)
        numNegativeReviews = 0
        numPositiveReviews = 0
        totalPositiveConfidence = 0
        totalNegativeConfidence = 0

        print("Number of Comments: ", len(comments_dict["comment_body"]))

        for comment in comments_dict["comment_body"]:
            review, score = predict(comment)

            if review == "Positive":
                numPositiveReviews += 1
                totalPositiveConfidence += score

            elif review == "Negative":
                numNegativeReviews += 1
                totalNegativeConfidence += score
        totalReviews = numPositiveReviews + numNegativeReviews
        percentPosReviews = numPositiveReviews/totalReviews
        percentNegReviews = numNegativeReviews/totalReviews
        averagepositiveconfidence = totalPositiveConfidence/totalReviews
        averagenegativeconfidence = totalNegativeConfidence/totalReviews
        f.write(course+"\n")
        f.write("percent_positive:"+str(percentPosReviews)+"\n")
        f.write("percent_negative:"+str(percentNegReviews)+"\n")
        f.write("average_positive:"+str(averagepositiveconfidence)+"\n")
        f.write("average_neg:"+str(averagenegativeconfidence)+"\n\n")
def findcourse(course):
    f = open("confidence.txt","r")
    percentPosReviews = ""
    percentNegReviews = ""
    averagepositiveconfidence = ""
    averagenegativeconfidence = ""
    lines = f.readlines()
    print(len(lines))
    for i in range(0,len(lines)):
        if(str(lines[i].strip())==course):
            percentPosReviews = lines[i+1].split(':')[1].strip()
            percentNegReviews = lines[i+2].split(':')[1].strip()
            averagepositiveconfidence = lines[i+3].split(':')[1].strip()
            averagenegativeconfidence = lines[i+4].split(':')[1].strip()
        data = [percentPosReviews,percentNegReviews,averagepositiveconfidence,averagenegativeconfidence]
    if(all(data)):
        return data
    return False
#updateconfidencedatabase()

