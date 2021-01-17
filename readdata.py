from bs4 import BeautifulSoup
import requests
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
            print(tid)
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
    profData = [rating,total_ratings,difficulty,percentageRetake,tid]
    if(all(profData)):
        return profData
    return False
profData = find_prof("Antal Molina")
print(profData)
#print(profData[2])
#getpercentage("11935")
            