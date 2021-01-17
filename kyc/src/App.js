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


import React, { useState, useEffect } from 'react';
function App() {
useEffect(() => {
    fetch("/rating?name=Gordon+Lee&courseName=ECON&courseNumber=101").then(response =>
      response.json().then(data => {
        console.log(data);
      })
    );
  }, []);
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
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

function FunctionalitySetter(props) {
  const [completed, setCompleted] = useState(0);



  const diffculty = [
  { bgcolor: "#6a1b9a", completed: 60 },
  { bgcolor: "#00695c", completed: 30 },
  { bgcolor: "#ef6c00", completed: 53 },
]
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

  const calcTotal = () => {
    let total = DifficultyList[id1+courseNumber1+prof1]+
    DifficultyList[id2+courseNumber2+prof2]+
    DifficultyList[id3+courseNumber3+prof3]+
    DifficultyList[id4+courseNumber4+prof4]+
    DifficultyList[id5+courseNumber5+prof5]+
    DifficultyList[id6+courseNumber6+prof6]+
    DifficultyList[id7+courseNumber7+prof7]
    let answer = (total/7)*10;
    setCompleted(answer);
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
      <Input focus placeholder='Course Name...' onChange={handleCourseName1}/>
      <Input focus placeholder='Course Name...' onChange={handleCourseNumber1}/>
      <Input focus placeholder='Course Name...' onChange={handleProf1}/>
    </div>

    <div className = "CourseLoadFormContainer">
      <p className = "ButtonText">
      2.
      </p>
       <Input focus placeholder='Course Name...' onChange={handleCourseName2}/>
      <Input focus placeholder='Course Name...' onChange={handleCourseNumber2}/>
      <Input focus placeholder='Course Name...' onChange={handleProf2}/>
    </div>

    <div className = "CourseLoadFormContainer">
      <p className = "ButtonText">
      3.
      </p>
       <Input focus placeholder='Course Name...' onChange={handleCourseName3}/>
      <Input focus placeholder='Course Name...' onChange={handleCourseNumber3}/>
      <Input focus placeholder='Course Name...' onChange={handleProf3}/>
    </div>

    <div className = "CourseLoadFormContainer">
      <p className = "ButtonText">
      4.
      </p>
       <Input focus placeholder='Course Name...' onChange={handleCourseName4}/>
      <Input focus placeholder='Course Name...' onChange={handleCourseNumber4}/>
      <Input focus placeholder='Course Name...' onChange={handleProf4}/>
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
      <Input focus placeholder='Course Name...' onChange={handleCourseNumber5}/>
      <Input focus placeholder='Course Name...' onChange={handleProf5}/>
    </div>

    <div className = "CourseLoadFormContainer">
      <p className = "ButtonText">
      6.
      </p>
       <Input focus placeholder='Course Name...' onChange={handleCourseName6}/>
      <Input focus placeholder='Course Name...' onChange={handleCourseNumber6}/>
      <Input focus placeholder='Course Name...' onChange={handleProf6}/>
    </div>

    <div className = "CourseLoadFormContainer">
      <p className = "ButtonText">
      7.
      </p>
       <Input focus placeholder='Course Name...' onChange={handleCourseName7}/>
      <Input focus placeholder='Course Name...' onChange={handleCourseNumber7}/>
      <Input focus placeholder='Course Name...' onChange={handleProf7}/>
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
    <ProgressBar bgcolor={color[Math.floor(DifficultyList[id1+courseNumber1+prof1])]} completed={DifficultyList[id1+courseNumber1+prof1]?DifficultyList[id1+courseNumber1+prof1]*10:0} /> 
    <ProgressBar bgcolor={color[Math.floor(DifficultyList[id2+courseNumber2+prof2])]} completed={DifficultyList[id2+courseNumber2+prof2]?DifficultyList[id2+courseNumber2+prof2]*10:0} />
    <ProgressBar bgcolor={color[Math.floor(DifficultyList[id3+courseNumber3+prof3])]} completed={DifficultyList[id3+courseNumber3+prof3]?DifficultyList[id3+courseNumber3+prof3]*10:0} />
    <ProgressBar bgcolor={color[Math.floor(DifficultyList[id4+courseNumber4+prof4])]} completed={DifficultyList[id4+courseNumber4+prof4]?DifficultyList[id4+courseNumber4+prof4]*10:0} />
    <ProgressBar bgcolor={color[Math.floor(DifficultyList[id5+courseNumber5+prof5])]} completed={DifficultyList[id5+courseNumber5+prof5]?DifficultyList[id5+courseNumber5+prof5]*10:0} />
    <ProgressBar bgcolor={color[Math.floor(DifficultyList[id6+courseNumber6+prof6])]} completed={DifficultyList[id6+courseNumber6+prof6]?DifficultyList[id6+courseNumber6+prof6]*10:0} />
    <ProgressBar bgcolor={color[Math.floor(DifficultyList[id7+courseNumber7+prof7])]} completed={DifficultyList[id7+courseNumber7+prof7]?DifficultyList[id7+courseNumber7+prof7]*10:0} />
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
    <ProgressBar bgcolor={color[Math.floor(completed/10)]} completed={completed} />
    </div> 
    </div>
    </div>
  );
  }
  else{
    return(
      <p className = "ButtonText">
      </p>
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
        <button onClick = {()=>setEx("F2")} className= "FeatureButton">
          <p className = "ButtonText">
                  Feature2
          </p> 
        </button>
        <button onClick = {()=>setEx("F3")} className="FeatureButton"> 
        <p className = "ButtonText">
                Feature3
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
