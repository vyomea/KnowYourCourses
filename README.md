## KnowYourCourses

## WHY?
The previous semester that was online for the most of us had an unprecedented difficulty in terms of course load and while individual courses did not seem daunting, a combination of them definitely harmed the mental health of many people we spoke to. So hopefully, through this, people can know what they're getting into, and have an emotionally healthy semester :)

## What does it do?
Based on correct entry of data, the applications fetches the corresponding difficulty ratings for the data entered. Upon entering a full schedule, the total difficulty is assessed based on our own algorithms (and indivual). The algorithms take into account the number of negative, positive reviews, external ratings, course level, historic difficulty, the instructor etc. We use semantic analysis to determine if a course is hard or not.

## How to run:

Step1: Clone the project and download all the required dependencies.
Step2: While into the project, cd kys && npm start to start the front-end server
Step3: From the root folder, in another terminal, start the backend server: 
        export FLASK_APP=api
        flask run
Step4: You can look at the local ports and visit them, then follow along the instructions on the front-end server :)
Step5: Have fun with different combinations.

## Notes

1. Certain courses and their combinations are cached,and will likely work faster when you hit "Go!". Some of these include: econ 101, econ 102, and math 102.
2. Courses that are not cached will run depending on the number of reviews/comments/data that need to be analyzed, so it might be longer to run. Some non-cached courses that work quickly are: ECE 325 [Professor_name] or ECE 311 [Professor_name]. Please make sure professor names are two words, and consistent with RateMyProfessor.

## How is it built?
We used a ReactJS frontend connected with a Python backend using a REST API made with Flask. Under the hood, there are nlp, and web scraping algorithms to analyze and fetch data, respectively. The analysis is then used as inputs for our algorithm that calculates a difficulty rating that is then displayed on the web app under 'Difficulty Meter.'

## Challenges
The foremost challenge was that we had 24 hours to learn how to build an end-to-end web app from scratch that used comprehensive ML algorithms(NLP). In essence, everything we used (expect maybe the languages) was foreign to us in the sense that getting the whole to be greater than sum of parts was difficult. We had to learn how to webscrape Reddit and rate my prof, use nlp for semantic analysis to determine whether a course is hard or not, combine React.js(and various other front-end frameworks) and Python code using flask by creating a REST API. Additionally, choosing good training and testing data, and training a good model was challenging as well as none of us had any experience with NLP. Lastly, we had to make an algorithm to assign weights and properly assess how different factors effected the overall difficulty of the course, and their amalgamated schedule.

## Future
Introducing caching to scale the web app, add personalised gpa features, enhancing the nlp model to classify more classes, and potentially extend it to all the universities in the world.


