import logo from './logo.svg';
import './App.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import { Input } from 'semantic-ui-react'
import Async from 'react-async';


import React, { useState, useEffect } from 'react';
function App() {
  return (
      <div className="App">
        <header className="App-header">
          <p className = "App-header-text">
            Know Your Courses
          </p>
          <ColoredLine color="black" />
        </header>
      <Feature1 />
      </div>
  );
}
const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    marginTop:10,
    height: 20,
    width: '100%',
    backgroundColor: "white",
    borderRadius: 10,
    margin: 2
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    transition: 'width 1s ease-in-out',
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    color:'black',
    fontFamily:'Avenir Next Ultra Light',
    fontWeight: 400,
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{}</span>
      </div>
    </div>
  );
};

function FunctionalitySetter(props) {
  


  const [completed, setCompleted] = useState(0);
  const [prog1,setProg1] = useState(0);
  const [prog2,setProg2] = useState(0);
  const [prog3,setProg3] = useState(0);
  const [prog4,setProg4] = useState(0);
  const [prog5,setProg5] = useState(0);
  const [prog6,setProg6] = useState(0);
  const [prog7,setProg7] = useState(0);

  const [id1,setId1] = useState("")
  const [id2,setId2] = useState("")
  const [id3,setId3] = useState("")
  const [id4,setId4] = useState("")
  const [id5,setId5] = useState("")
  const [id6,setId6] = useState("")
  const [id7,setId7] = useState("")

  const [courseNumber1,setCourseNumber1] = useState("")
  const [courseNumber2,setCourseNumber2] = useState("")
  const [courseNumber3,setCourseNumber3] = useState("")
  const [courseNumber4,setCourseNumber4] = useState("")
  const [courseNumber5,setCourseNumber5] = useState("")
  const [courseNumber6,setCourseNumber6] = useState("")
  const [courseNumber7,setCourseNumber7] = useState("")
  
  const [prof1,setProf1] = useState("")
  const [prof2,setProf2] = useState("")
  const [prof3,setProf3] = useState("")
  const [prof4,setProf4] = useState("")
  const [prof5,setProf5] = useState("")
  const [prof6,setProf6] = useState("")
  const [prof7,setProf7] = useState("")

  const [text,setText] = useState("")
  const [category, setCategory] = useState("")
  const handleCategory = (e) => {
    setCategory(e.target.value)
  }
  const MasterList = {
    'ENG':[101,102,103],
    'MATH':[101,102],
    'CMPUT':[174,175],
  }
  const ProfessorList = {
    'ENG101':['a','b'],
    'ENG102':['c','d'],
    'MATH101':['e','f'],
    'MATH102':['g','h'],
    'CMPUT174':['i','j'],
    'CMPUT175':['k','l'],
  }
  const DifficultyList = {
    'ENG101a':1,
    'ENG101b':3,
    'ENG102c':5,
    'ENG102d':9,
    'MATH101e':6,
    'MATH101f':3,
    'MATH102g':2,
    'MATH102h':8,
    'CMPUT174i':0,
    'CMPUT174j':1,
    'CMPUT175k':3,
    'CMPUT175l':4,
  }
  var scores = []

  if (props.Feature =="CourseLoad"){  

  const handleCourseNumber1 = (e) => {
    setCourseNumber1(e.target.value)
  }
  const handleCourseName1 = (e) => {
    setId1(e.target.value)
  }

  const handleProf1 = (e) => {
    setProf1(e.target.value)
  }
  let handleRequest = async function(name,number,prof,no){
    var first = prof.split(" ")[0]
    var second = prof.split(" ")[1]
    if (no==1){
    if (courseNumber1.length>=1 && id1.length>=1){
    const response = await fetch(`/rating?name=${first}+${second}&courseName=${name}&courseNumber=${number}`);
    const json = await response.json();
    setProg1(Math.round(json.rating * 100) / 100);}
    else{
      setProg1(0);
    }
    scores.push(50)
    }
    if(no==2){
      if (courseNumber2.length>=1 && id2.length>=1){
    const response = await fetch(`/rating?name=${first}+${second}&courseName=${name}&courseNumber=${number}`);
    const json = await response.json();
    setProg2(Math.round(json.rating * 100) / 100);}
    else{
      setProg2(0);
    }
    scores.push(prog2)
    }
    if(no==3){
    if (courseNumber3.length>=1 && id3.length>=1){
    const response = await fetch(`/rating?name=${first}+${second}&courseName=${name}&courseNumber=${number}`);
    const json = await response.json();
    setProg3(Math.round(json.rating * 100) / 100);}
    else{
      setProg3(0);
    }
    scores.push(prog3)
    }
    if(no==4){
    if (courseNumber4.length>=1 && id4.length>=1){
    const response = await fetch(`/rating?name=${first}+${second}&courseName=${name}&courseNumber=${number}`);
    const json = await response.json();
    setProg4(Math.round(json.rating * 100) / 100);
    }
    else{
      setProg4(0);
    }
    scores.push(prog4)
    }
    if(no==5){
    if (courseNumber5.length>=1 && id5.length>=1){
    const response = await fetch(`/rating?name=${first}+${second}&courseName=${name}&courseNumber=${number}`);
    const json = await response.json();
    setProg5(Math.round(json.rating * 100) / 100);}
    else{
      setProg5(0);
    }
    scores.push(prog5)
    }
    if(no==6){
    if (courseNumber6.length>=1 && id6.length>=1){
    const response = await fetch(`/rating?name=${first}+${second}&courseName=${name}&courseNumber=${number}`);
    const json = await response.json();
    if(json.rating == -1){
      setProg6(0)
    }
    else{
    setProg6(Math.round(json.rating * 100) / 100);}
    }
    scores.push(prog6)
    }
    if(no==7){
    if (courseNumber7.length>=1 && id7.length>=1){
    const response = await fetch(`/rating?name=${first}+${second}&courseName=${name}&courseNumber=${number}`);
    const json = await response.json();
    if(json.rating == -1){
      setProg7(0)
    }
    else{
    setProg7(Math.round(json.rating * 100) / 100);}
    }
    scores.push(prog7)
    }
    
  }
  const handleCourseNumber2 = (e) => {
    setCourseNumber2(e.target.value)
  }
  const handleCourseName2 = (e) => {
    setId2(e.target.value)
  }
  const handleProf2 = (e) => {
    setProf2(e.target.value)
  }

  const handleCourseNumber3 = (e) => {
    setCourseNumber3(e.target.value)
  }
  const handleCourseName3 = (e) => {
    setId3(e.target.value)
  }
  const handleProf3 = (e) => {
    setProf3(e.target.value)
  }

  const handleCourseNumber4 = (e) => {
    setCourseNumber4(e.target.value)
  }
  const handleCourseName4 = (e) => {
    setId4(e.target.value)
  }
  const handleProf4 = (e) => {
    setProf4(e.target.value)
  }

  const handleCourseNumber5 = (e) => {
    setCourseNumber5(e.target.value)
  }
  const handleCourseName5 = (e) => {
    setId5(e.target.value)
  }
  const handleProf5 = (e) => {
    setProf5(e.target.value)
  }

  const handleCourseNumber6 = (e) => {
    setCourseNumber6(e.target.value)
  }
  const handleCourseName6 = (e) => {
    setId6(e.target.value)
  }
  const handleProf6 = (e) => {
    setProf6(e.target.value)
  }

  const handleCourseNumber7 = (e) => {
    setCourseNumber7(e.target.value)
  }
  const handleCourseName7 = (e) => {
    setId7(e.target.value)
  }
  const handleProf7 = (e) => {
    setProf7(e.target.value)
  }
  const handleCompleted = () => {
    if(completed==90){
      return "Not Manageable"
    }
    if (completed==30){
      return "Light Course load"
    }
    if (completed == 50){
      return "Manageable Course Load"
    }
    if (completed == 10){
      return "Easy, have fun"
    }
    if (completed == 70){
      return "Likely to be difficult"
    }
  }

  const calcTotal = () => {
    scores.push(prog1)
    scores.push(prog2)
    scores.push(prog3)
    scores.push(prog4)
    scores.push(prog5)
    scores.push(prog6)
    scores.push(prog7)
    let answer = 0;
    for(let i =0; i<scores.length; i++){
      answer+=scores[i]
    }
    console.log(answer);
    if(answer >160 && answer<=200){
      setCompleted(50)
    }
    else if (answer >= 250){
      setCompleted(90)
    }
    else if (answer >= 130 && answer <=160){
        setCompleted(30)
    }
    else if (answer < 150){
      setCompleted(10)
    }
    else if(answer>200&&answer<250){
      setCompleted(70)
    }
    else{
      setCompleted(50)
    }
    console.log(scores)
  }

  let courses = []
  const color = ['#b8ff04','#9aff02','#6fd40b','#b5d611','#d2d911',
  '#d6cf0f','#d9b813','#dba50f','#e89042','#eb4b1f']
  Object.entries(MasterList).forEach(([key, value]) => courses.push(key));
  return(
    <div>
    <div style={{display:'flex',justifyContent:'flex-start',flexDirection:'column'}}>
    <p className = "ButtonText"> 
        Enter your course name, corresponding course number and instructor!
    </p>
    
    <p className = "ButtonText"> 
        Watch the difficulty meters grow/shrink based on your schedule! 
    </p>
    </div>
    <hr
        style={{
            color: "black",
            backgroundColor: "black",
            height: 0.5,
            width:"60vh",
            marginLeft:"35%"
        }}
    />
    <div className = "MainContainer">

    <div className = "VerticalContainer">
    <div className = "CourseLoadFormContainer">
    <p className = "ButtonText">
      1.
    </p>
      <Input focus placeholder='Course Name...ECE' onChange={handleCourseName1}/>
      <Input focus placeholder='Course Number...325' onChange={handleCourseNumber1}/>
      <Input focus placeholder='Instructor: Antal Molina' onChange={handleProf1}/>
      <button className = "FeatureButton" onClick = {()=>handleRequest(id1,courseNumber1,prof1,1)}>
      <p className = "ButtonText">
      Go!
      </p>
      </button>
    </div>

    <div className = "CourseLoadFormContainer">
      <p className = "ButtonText">
      2.
      </p>
       <Input focus placeholder='Course Name...ECE' onChange={handleCourseName2}/>
      <Input focus placeholder='Course Number...325' onChange={handleCourseNumber2}/>
      <Input focus placeholder='Instructor: Antal Molina' onChange={handleProf2}/>
      <button className = "FeatureButton" onClick = {()=>handleRequest(id2,courseNumber2,prof2,2)}>
      <p className = "ButtonText">
      Go!
      </p>
      </button>
    </div>

    <div className = "CourseLoadFormContainer">
      <p className = "ButtonText">
      3.
      </p>
       <Input focus placeholder='Course Name...' onChange={handleCourseName3}/>
      <Input focus placeholder='Course Number...' onChange={handleCourseNumber3}/>
      <Input focus placeholder='Instructor...' onChange={handleProf3}/>
      <button className = "FeatureButton" onClick = {()=>handleRequest(id3,courseNumber3,prof3,3)}>
      <p className = "ButtonText">
      Go!
      </p>
       </button>
    </div>

    <div className = "CourseLoadFormContainer">
      <p className = "ButtonText">
      4.
      </p>
       <Input focus placeholder='Course Name...' onChange={handleCourseName4}/>
      <Input focus placeholder='Course Number...' onChange={handleCourseNumber4}/>
      <Input focus placeholder='Instructor Name...' onChange={handleProf4}/>
      <button className = "FeatureButton" onClick = {()=>handleRequest(id4,courseNumber4,prof4,4)}>
      <p className = "ButtonText">
      Go!
      </p>
       </button>
      <button onClick = {calcTotal} className= "FeatureButton">
        <p className = "ButtonText">
                Calculate total
        </p> 
      </button>
    </div>

    <div className = "CourseLoadFormContainer">
      <p className = "ButtonText">
      5.
      </p>
       <Input focus placeholder='Course Name...' onChange={handleCourseName5}/>
      <Input focus placeholder='Course Number...' onChange={handleCourseNumber5}/>
      <Input focus placeholder='Instructor Name...' onChange={handleProf5}/>
      <button className = "FeatureButton" onClick = {()=>handleRequest(id5,courseNumber5,prof5,5)}>
      <p className = "ButtonText">
      Go!
      </p>
       </button>
    </div>

    <div className = "CourseLoadFormContainer">
      <p className = "ButtonText">
      6.
      </p>
       <Input focus placeholder='Course Name...' onChange={handleCourseName6}/>
      <Input focus placeholder='Course Number...' onChange={handleCourseNumber6}/>
      <Input focus placeholder='Instructor Name...' onChange={handleProf6}/>
      <button className = "FeatureButton" onClick = {()=>handleRequest(id6,courseNumber6,prof6,6)}>
      <p className = "ButtonText">
      Go!
      </p>
       </button>
    </div>


    <div className = "CourseLoadFormContainer">
      <p className = "ButtonText">
      7.
      </p>
       <Input focus placeholder='Course Name...' onChange={handleCourseName7}/>
      <Input focus placeholder='Course Number...' onChange={handleCourseNumber7}/>
      <Input focus placeholder='Instructor Name...' onChange={handleProf7}/>
      <button className = "FeatureButton" onClick = {()=>handleRequest(id7,courseNumber7,prof7,7)}>
      <p className = "ButtonText">
      Go!
      </p>
       </button>
    </div>
    </div>

    <div className = "DifficultyMeter">
    <p className = "ButtonText" style={{marginLeft:"80px"}}>
        Difficulty Meter
    </p>  

     <OverlayTrigger
      key={'top'}
      placement={'top'}
      overlay={
        <Tooltip id={`tooltip-${'top'}`}>
          Individual difficulty includes our own algorithm to classify
          reviews, ratings, and other factors for every course.
          Method: Extensive data collection from the web and then using NLP, 
          and Deep Learning to get predictions. 
        </Tooltip>
      }
    >
      <Button variant="secondary">Individual Difficulty. Hover over me to find out more!</Button>
    </OverlayTrigger>
    <ProgressBar bgcolor={color[Math.floor(prog1/10)]} completed={prog1} /> 
    <ProgressBar bgcolor={color[Math.floor(prog2/10)]} completed={prog2} />
    <ProgressBar bgcolor={color[Math.floor(prog3/10)]} completed={prog3} />
    <ProgressBar bgcolor={color[Math.floor(prog4/10)]} completed={prog4} />
    <ProgressBar bgcolor={color[Math.floor(prog5/10)]} completed={prog5} />
    <ProgressBar bgcolor={color[Math.floor(prog6/10)]} completed={prog6} />
    <ProgressBar bgcolor={color[Math.floor(prog7/10)]} completed={prog7} />
    <OverlayTrigger
      key={'top'}
      placement={'top'}
      overlay={
        <Tooltip id={`tooltip-${'top'}`}>
         A measure of how difficult it will be to manage this combination of courses.
        </Tooltip>
      }
    >
      <Button variant="secondary">Total Difficulty. Hover over me to find out more!</Button>
    </OverlayTrigger>
    <p className = "ButtonText">
    {handleCompleted()}
    </p>
    <ProgressBar bgcolor={color[Math.floor(completed/10)]} completed={completed} />
    </div> 
    </div>
    </div>
  );
  }
  else{
    return(
      <div>
      <div style={{display:'flex',justifyContent:'flex-start',flexDirection:'column'}}>
        <p className = "ButtonText"> 
            Enter the desired subject and choose the difficulty.
        </p>
        
        <p className = "ButtonText"> 
            The following recommended courses are a guideline, feel free to change difficulty.
        </p>
        <hr
        style={{
            color: "black",
            backgroundColor: "black",
            height: 0.5,
            width:"60vh",
            marginLeft:"35%"
        }}
        /> 
        <div className = "CourseLoadFormContainer">
      <Input focus placeholder='Category...' onChange={handleCategory}/>
      </div>
    </div>
    </div>
  );
  }
}




function Feature1() {
  const [ex, setEx] = useState("")
  return(
    <div>
      <div className = "FeatureContainer">
        <button onClick = {()=>setEx("CourseLoad") } className = "FeatureButton"> 
          <p className = "ButtonText">
              Course Load
          </p>
        </button>
        <button onClick = {()=>setEx("DoesntMatter")} className="FeatureButton"> 
        <p className = "ButtonText">
            Recommendations
          </p>
        </button>
      </div>
          <hr
        style={{
            color: "black",
            backgroundColor: "black",
            height: 0.5,
            width:"60vh",
            marginLeft:"35%"
        }}
    />
      <div className = "SelectedFeature">
        <FunctionalitySetter Feature = {ex}/>
      </div>
    </div>
  )
}

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.5,
            width:window.innerWidth
        }}
    />
);
export default App;
