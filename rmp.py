import requests
import json
import math
from bs4 import BeautifulSoup
class RateMyProfScraper:
        def __init__(self,schoolid):
            self.UniversityId = schoolid
            self.professorlist = self.createprofessorlist()
            self.indexnumber = False

        def createprofessorlist(self):#creates List object that include basic information on all Professors from the IDed University
            tempprofessorlist = []
            num_of_prof = self.GetNumOfProfessors(self.UniversityId)
            num_of_pages = math.ceil(num_of_prof / 20)
            i = 1
            while (i <= num_of_pages):# the loop insert all professor into list
                page = requests.get("http://www.ratemyprofessors.com/filter/professor/?&page=" + str(
                    i) + "&filter=teacherlastname_sort_s+asc&query=*%3A*&queryoption=TEACHER&queryBy=schoolId&sid=" + str(
                    self.UniversityId))
                temp_jsonpage = json.loads(page.content)
                temp_list = temp_jsonpage['professors']
                tempprofessorlist.extend(temp_list)
                i += 1
            return tempprofessorlist

        def GetNumOfProfessors(self,id):  # function returns the number of professors in the university of the given ID.
            page = requests.get(
                "http://www.ratemyprofessors.com/filter/professor/?&page=1&filter=teacherlastname_sort_s+asc&query=*%3A*&queryoption=TEACHER&queryBy=schoolId&sid=" + str(
                    id))  # get request for page
            temp_jsonpage = json.loads(page.content)
            num_of_prof = temp_jsonpage[
                              'remaining'] + 20  # get the number of professors at William Paterson University
            return num_of_prof

        def SearchProfessor(self, ProfessorName):
            self.indexnumber = self.GetProfessorIndex(ProfessorName)
            self.PrintProfessorInfo()
            self.printdifficultyrating()
            return self.indexnumber

        def GetProfessorIndex(self,ProfessorName):  # function searches for professor in list
            for i in range(0, len(self.professorlist)):
                if (ProfessorName == (self.professorlist[i]['tFname'] + " " + self.professorlist[i]['tLname'])):
                    return i
            return False  # Return False is not found

        def PrintProfessorInfo(self):  # print search professor's name and RMP score
            if self.indexnumber == False:
                print("error")
            else:
                print(self.professorlist[self.indexnumber])

        def PrintProfessorDetail(self,key):  # print search professor's name and RMP score
            if self.indexnumber == False:
                print("error")
                return "error"
            else:
                print(self.professorlist[self.indexnumber][key])
                return self.professorlist[self.indexnumber][key]
        def printdifficultyrating(self):
            tid = self.PrintProfessorDetail("tid")
            URL = 'https://www.ratemyprofessors.com/ShowRatings.jsp?tid='+str(tid)
            page = requests.get(URL)
            soup = BeautifulSoup(page.content, 'html.parser')
            elems = soup.find(id = 'root')
            res = elems.find_all('div',class_='FeedbackItem__FeedbackNumber-uof32n-1 kkESWs')
            print("level of difficulty "+str(res[1].text))
        def updatedatabase(self):
            f = open("data.txt","w")
            for i in range(0, len(self.professorlist)):
                f.write("professor name:"+ self.professorlist[i]['tFname'] + " " + self.professorlist[i]['tLname']+"\n")
                f.write("tid:"+str(self.professorlist[i]['tid'])+"\n")
                f.write("overall rating:"+str(self.professorlist[i]['overall_rating'])+"\n")
                f.write("total ratings:"+str(self.professorlist[i]['tNumRatings'])+"\n\n")
uOfA = RateMyProfScraper(1407)
uOfA.updatedatabase()