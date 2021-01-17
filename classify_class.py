#######
# IMPORT PACKAGES
#######

import praw
import pandas as pd
import spacy
from spacy.util import minibatch, compounding
import numpy

def getDetails():

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
    
        query = ['Cmput 401'] # default for now
        class_num = input("Which class reviews do you want to see? ")
        query = [class_num]
    
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
                "comment_link_id" : []
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
                
            return post_dict, comments_dict
            
            # post_comments = pd.DataFrame(comments_dict)

            # post_comments.to_csv(s+"_comments_"+ item +"subreddit.csv")
            # post_data = pd.DataFrame(post_dict)
            # post_data.to_csv(s+"_"+ item +"subreddit.csv")

def predict(input_data: str = "no"):
    #  Load saved trained model
    loaded_model = spacy.load("model_artifacts")
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


def getCourseDifficulty():

    return True

if __name__ == "__main__":
    post_dict, comments_dict = getDetails()
    numNegativeReviews = 0
    numPositiveReviews = 0
    totalReviews = numNegativeReviews + numNegativeReviews

    print("Number of Comments: ", len(comments_dict["comment_body"]))

    for comment in comments_dict["comment_body"]:
        review, score = predict(comment)

        if review == "Positive":
            numPositiveReviews += 1

        elif review == "Negative":
            numNegativeReviews += 1
    
    print("Number of Positive Reviews:", numPositiveReviews)
    print("Number of Negative Reviews:", numNegativeReviews)

    percentPosReviews = numPositiveReviews/totalReviews
    percentNegReviews = numNegativeReviews/totalReviews


        