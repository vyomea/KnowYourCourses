import logo from './logo.svg';
import './App.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from 'react';
function App() {
useEffect(() => {
    fetch("/rating").then(response =>
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

  const handleAdd = () => {
    setCompleted(DifficultyList[id1+courseNumber1+prof1])
  }
  const handleSelectCourseName1=(e)=>{
    setId1(e.substring(2,e.length))
    setCourseNumber1("")
    setProf1("")
  }
  const handleSelectCourseName2=(e)=>{
    setId2(e.substring(2,e.length))
    setCourseNumber2("")
    setProf2("")
  }
  const handleSelectCourseName3=(e)=>{
    setId3(e.substring(2,e.length))
    setCourseNumber3("")
    setProf3("")
  }
  const handleSelectCourseName4=(e)=>{
    setId4(e.substring(2,e.length))
    setCourseNumber4("")
    setProf4("")
  }
  const handleSelectCourseName5=(e)=>{
    setId5(e.substring(2,e.length))
    setCourseNumber5("")
    setProf5("")
  }
  const handleSelectCourseName6=(e)=>{
    setId6(e.substring(2,e.length))
    setCourseNumber6("")
    setProf6("")
  }
  const handleSelectCourseName7=(e)=>{
    setId7(e.substring(2,e.length))
    setCourseNumber7("")
    setProf7("")
  }


  const handleSelectCourseNumber1=(e)=>{
    setCourseNumber1(e.substring(2,e.length))
    setProf1("")

  }

  const handleSelectCourseNumber2=(e)=>{
    setCourseNumber2(e.substring(2,e.length))
    setProf2("")
  }

  const handleSelectCourseNumber3=(e)=>{
    setCourseNumber3(e.substring(2,e.length))
    setProf3("")
  }

  const handleSelectCourseNumber4=(e)=>{
    setCourseNumber4(e.substring(2,e.length))
    setProf4("")
  }

  const handleSelectCourseNumber5=(e)=>{
    setCourseNumber5(e.substring(2,e.length))
    setProf5("")
  }

  const handleSelectCourseNumber6=(e)=>{
    setCourseNumber6(e.substring(2,e.length))
    setProf6("")
  }

  const handleSelectCourseNumber7=(e)=>{
    setCourseNumber7(e.substring(2,e.length))
    setProf7("")
  }
  const handleSelectCourseProf1 = (e) => {
    setProf1(e.substring(2,e.length))
  }

   const handleSelectCourseProf2 = (e) => {
    setProf2(e.substring(2,e.length))
  }
  const handleAdd1 = (e) => {
    setCompleted(DifficultyList[id2+courseNumber2+prof2])
  }

  const handleSelectCourseProf3 = (e) => {
    setProf3(e.substring(2,e.length))
  }
  const handleAdd2 = (e) => {
    setCompleted(DifficultyList[id3+courseNumber3+prof3])
  }
  
  const handleSelectCourseProf4 = (e) => {
    setProf4(e.substring(2,e.length))
  }
  const handleAdd3 = (e) => {
    setCompleted(DifficultyList[id4+courseNumber4+prof4])
  }

  const handleSelectCourseProf5 = (e) => {
    setProf5(e.substring(2,e.length))
  }
  const handleAdd4 = (e) => {
    setCompleted(DifficultyList[id5+courseNumber5+prof5])
  }
  
  const handleSelectCourseProf6 = (e) => {
    setProf6(e.substring(2,e.length))
  }
  const handleAdd5 = (e) => {
    setCompleted(DifficultyList[id6+courseNumber6+prof6])
  }
  const handleAdd6 = (e) => {
    setCompleted(DifficultyList[id7+courseNumber7+prof7])
  }
  const handleSelectCourseProf7 = (e) => {
    setProf7(e.substring(2,e.length))
  }



  let courses = []
  const color = ['#b8ff04','#9aff02','#6fd40b','#b5d611','#d2d911',
'#d6cf0f','#d9b813','#dba50f','#e89042','#eb4b1f']
  Object.entries(MasterList).forEach(([key, value]) => courses.push(key));
  return(
    <div>
    <div style={{display:'flex',justifyContent:'flex-start',flexDirection:'column'}}>
    <p className = "ButtonText"> 
        Choose your course name, corresponding course number and instructor!
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
      <Dropdown onSelect={handleSelectCourseName1}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {id1.length<=1?"Course Name":id1}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {courses.map((courseName) => (
          <Dropdown.Item href ={`#/${courseName}`}>{courseName}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown onSelect={handleSelectCourseNumber1}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {courseNumber1.length<=1?"Course Number":courseNumber1}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {id1.length<=1?"":MasterList[id1].map((cNum) => (
          <Dropdown.Item href ={`#/${cNum}`}>{cNum}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>

      </Dropdown>
       <Dropdown onSelect={handleSelectCourseProf1}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {prof1.length<=0?"Select Instructor":prof1}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {courseNumber1.length<=1?"":ProfessorList[id1+courseNumber1].map((cNum) => (
          <Dropdown.Item href ={`#/${cNum}`}>{cNum}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
      <button onClick = {handleAdd} className= "FeatureButton">
          <p className = "ButtonText">
                  Add!
          </p> 
      </button>
    </div>

  <div className = "CourseLoadFormContainer">
      <p className = "ButtonText">
      2.
      </p>
      <Dropdown onSelect={handleSelectCourseName2}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {id2.length<=1?"Course Name":id2}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {courses.map((courseName) => (
          <Dropdown.Item href ={`#/${courseName}`}>{courseName}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown onSelect={handleSelectCourseNumber2}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {courseNumber2.length<=1?"Course Number":courseNumber2}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {id2.length<=1?"":MasterList[id2].map((cNum) => (
          <Dropdown.Item href ={`#/${cNum}`}>{cNum}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
       <Dropdown onSelect={handleSelectCourseProf2}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {prof2.length<=0?"Select Instructor":prof2}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {courseNumber2.length<=1?"":ProfessorList[id2+courseNumber2].map((cNum) => (
          <Dropdown.Item href ={`#/${cNum}`}>{cNum}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
      <button onClick = {handleAdd1} className= "FeatureButton">
          <p className = "ButtonText">
                  Add!
          </p> 
      </button>
    </div>

    <div className = "CourseLoadFormContainer">
      <p className = "ButtonText">
      3.
      </p>
      <Dropdown onSelect={handleSelectCourseName3}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {id3.length<=1?"Course Name":id3}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {courses.map((courseName) => (
          <Dropdown.Item href ={`#/${courseName}`}>{courseName}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown onSelect={handleSelectCourseNumber3}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {courseNumber3.length<=1?"Course Number":courseNumber3}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {id3.length<=1?"":MasterList[id3].map((cNum) => (
          <Dropdown.Item href ={`#/${cNum}`}>{cNum}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
       <Dropdown onSelect={handleSelectCourseProf3}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {prof3.length<=0?"Select Instructor":prof3}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {courseNumber3.length<=1?"":ProfessorList[id3+courseNumber3].map((cNum) => (
          <Dropdown.Item href ={`#/${cNum}`}>{cNum}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
      <button onClick = {handleAdd2} className= "FeatureButton">
          <p className = "ButtonText">
                  Add!
          </p> 
      </button>
    </div>

    <div className = "CourseLoadFormContainer">
      <p className = "ButtonText">
      4.
      </p>
      <Dropdown onSelect={handleSelectCourseName4}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {id4.length<=1?"Course Name":id4}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {courses.map((courseName) => (
          <Dropdown.Item href ={`#/${courseName}`}>{courseName}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown onSelect={handleSelectCourseNumber4}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {courseNumber4.length<=1?"Course Number":courseNumber4}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {id4.length<=1?"":MasterList[id4].map((cNum) => (
          <Dropdown.Item href ={`#/${cNum}`}>{cNum}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
       <Dropdown onSelect={handleSelectCourseProf4}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {prof4.length<=0?"Select Instructor":prof4}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {courseNumber4.length<=1?"":ProfessorList[id4+courseNumber4].map((cNum) => (
          <Dropdown.Item href ={`#/${cNum}`}>{cNum}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
      <button onClick = {handleAdd3} className= "FeatureButton">
          <p className = "ButtonText">
                  Add!
          </p> 
      </button>
    </div>

    <div className = "CourseLoadFormContainer">
      <p className = "ButtonText">
      5.
      </p>
      <Dropdown onSelect={handleSelectCourseName5}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {id5.length<=1?"Course Name":id5}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {courses.map((courseName) => (
          <Dropdown.Item href ={`#/${courseName}`}>{courseName}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown onSelect={handleSelectCourseNumber5}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {courseNumber5.length<=1?"Course Number":courseNumber5}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {id5.length<=1?"":MasterList[id5].map((cNum) => (
          <Dropdown.Item href ={`#/${cNum}`}>{cNum}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
       <Dropdown onSelect={handleSelectCourseProf5}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {prof5.length<=0?"Select Instructor":prof5}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {courseNumber5.length<=1?"":ProfessorList[id5+courseNumber5].map((cNum) => (
          <Dropdown.Item href ={`#/${cNum}`}>{cNum}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
      <button onClick = {handleAdd4} className= "FeatureButton">
          <p className = "ButtonText">
                  Add!
          </p> 
      </button>
    </div>

    <div className = "CourseLoadFormContainer">
      <p className = "ButtonText">
      6.
      </p>
      <Dropdown onSelect={handleSelectCourseName6}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {id6.length<=1?"Course Name":id6}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {courses.map((courseName) => (
          <Dropdown.Item href ={`#/${courseName}`}>{courseName}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown onSelect={handleSelectCourseNumber6}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {courseNumber6.length<=1?"Course Number":courseNumber6}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {id6.length<=1?"":MasterList[id6].map((cNum) => (
          <Dropdown.Item href ={`#/${cNum}`}>{cNum}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
       <Dropdown onSelect={handleSelectCourseProf6}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {prof6.length<=0?"Select Instructor":prof6}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {courseNumber6.length<=1?"":ProfessorList[id6+courseNumber6].map((cNum) => (
          <Dropdown.Item href ={`#/${cNum}`}>{cNum}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
      <button onClick = {handleAdd5} className= "FeatureButton">
          <p className = "ButtonText">
                  Add!
          </p> 
      </button>
    </div>

    <div className = "CourseLoadFormContainer">
      <p className = "ButtonText">
      7.
      </p>
      <Dropdown onSelect={handleSelectCourseName7}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {id7.length<=1?"Course Name":id7}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {courses.map((courseName) => (
          <Dropdown.Item href ={`#/${courseName}`}>{courseName}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown onSelect={handleSelectCourseNumber7}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {courseNumber7.length<=1?"Course Number":courseNumber7}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {id7.length<=1?"":MasterList[id7].map((cNum) => (
          <Dropdown.Item href ={`#/${cNum}`}>{cNum}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
       <Dropdown onSelect={handleSelectCourseProf7}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {prof7.length<=0?"Select Instructor":prof7}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {courseNumber7.length<=1?"":ProfessorList[id7+courseNumber7].map((cNum) => (
          <Dropdown.Item href ={`#/${cNum}`}>{cNum}</Dropdown.Item>
        )
        )}
        </Dropdown.Menu>
      </Dropdown>
      <button onClick = {handleAdd6} className= "FeatureButton">
          <p className = "ButtonText">
                  Add!
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
          The difficulty individual difficulty includes our own algorithm to classify
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
          The total difficulty is the average of the individual difficulties.
        </Tooltip>
      }
    >
      <Button variant="secondary">Total Difficulty. Hover over me to find out more!</Button>
    </OverlayTrigger>
    <ProgressBar bgcolor={color[Math.floor(completed)]} completed={completed*10} />
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
