import { useState,useEffect } from "react";
import "./app.css"
import Aish from "./componants/Aish";
import { useMemo } from "react";
import Timer from "./componants/Timer";
import Start from "./componants/Start";


function App() {
  const [username, setUsername]=useState(null);
  const [questionNumber, setQuestionNumber]= useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const data = [{
    id: 1,
    question:"Which is the largest state in India?",
    answers:[
      {
        text:"Maharashtra",
        correct: false,
      },
      {
        text:"Rajasthan",
        correct: true,
      },
      {
        text:"UttarPradesh",
        correct: false,
      },
      {
        text:"Gujrat",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question:"U.S.A. What is its currency?",
    answers:[
      {
        text:"Dollar",
        correct: true,
      },
      {
        text:"Rupees",
        correct: false,
      },
      {
        text:"Euro",
        correct: false,
      },
      {
        text:"Pounds",
        correct: false,
      },
    ],
  },
  
  {
    id: 3,
    question:"What is the length of a word on a computer?",
    answers:[
      {
        text:"Byte",
        correct: false,
      },
      {
        text:"meter",
        correct: false,
      },
      {
        text:"bit",
        correct: true,
      },
      {
        text:"liter",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question:"Which of the following is an output device?",
    answers:[
      {
        text:"Keyboard",
        correct: false,
      },
      {
        text:"light pen",
        correct: false,
      },
      {
        text:"mouse",
        correct: false,
      },
      {
        text:"VDU",
        correct: true,
      },
    ],
  },
  {
    id: 5,
    question:" Which is India’s first super computer?",
    answers:[
      {
        text:"Param8000",
        correct: true,
      },
      {
        text:"Param80",
        correct: false,
      },
      {
        text:"param80000",
        correct: false,
      },
      {
        text:"param8",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question:"LED stands for what?",
    answers:[
      {
        text:"Light Emitting Diode",
        correct: true,
      },
      {
        text:"Light electic diode",
        correct: false,
      },
      {
        text:"Light Emiiting device",
        correct: false,
      },
      {
        text:"Low Emiiting device",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question:"Akshat has created a story of ten pages, but only wants to print the first two pages. Which printer command should he choose?",
    answers:[
      {
        text:"Print all",
        correct: false,
      },
      {
        text:"Print from 1 to 2",
        correct: true,
      },
      {
        text:"Print preview",
        correct: false,
      },
      {
        text:"page setup",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question:"What is the capital of United Kingdom?",
    answers:[
      {
        text:"London",
        correct: true,
      },
      {
        text:"Liverpool",
        correct: false,
      },
      {
        text:"bristol",
        correct: false,
      },
      {
        text:"Edinburgh",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question:"Which variable type can have only two possible values?",
    answers:[
      {
        text:"Char",
        correct: false,
      },
      {
        text:"Int",
        correct: false,
      },
      {
        text:"Boolean",
        correct: true,
      },
      {
        text:"Double",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question:"Who is the current President of Iran?",
    answers:[
      {
        text:"Ahmadinejad",
        correct: false,
      },
      {
        text:"Hassan Rouhani",
        correct: false,
      },
      {
        text:"Muhammad Khatami",
        correct: false,
      },
      {
        text:"Ebrahim Raisi",
        correct:true,
      },
    ],
  },
  {
    id: 11,
    question:"Which country claims that “Taiwan” is a part of their territory?",
    answers:[
      {
        text:"Austrelia",
        correct: false,
      },
      {
        text:"Japan",
        correct: false,
      },
      {
        text:"China",
        correct: true,
      },
      {
        text:"USA",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question:"“Google Language Translator” is an example of the application of",
    answers:[
      {
        text:"Internet Simulation",
        correct: false,
      },
      {
        text:"Machine Learning",
        correct: true,
      },
      {
        text:"Internet",
        correct: false,
      },
      {
        text:"debugging",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question:"Apart from Venus, which planet rotates from east to west?",
    answers:[
      {
        text:"Jupiter",
        correct: false,
      },
      {
        text:"mars",
        correct: false,
      },
      {
        text:"mercury",
        correct: false,
      },
      {
        text:"Uranus",
        correct: true,
      },
    ],
  },
  {
    id: 14,
    question:"Memory which forgets everything when you switch off the power is known as",
    answers:[
      {
        text:"Volatile",
        correct: true,
      },
      {
        text:"Primary",
        correct: false,
      },
      {
        text:"Currupted",
        correct: false,
      },
      {
        text:"Non-Volatile",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question:" SMPS stands for",
    answers:[
      {
        text:"Switched-mode Power Supply",
        correct: true,
      },
      {
        text:"Start mode Power Supply",
        correct: false,
      },
      {
        text:"Single mode Power Supply",
        correct: false,
      },
      {
        text:"Stored mode Power Supply",
        correct: false,
      },
    ],
  },
  
];

  const moneyPyramid = useMemo(()=>
  [
    {id: 1, amount:"$ 100"},
    {id: 2, amount:"$ 200"},
    {id: 3, amount:"$ 300"},
    {id: 4, amount:"$ 500"},
    {id: 5, amount:"$ 1000"},
    {id: 6, amount:"$ 2000"},
    {id: 7, amount:"$ 4000"},
    {id: 8, amount:"$ 8000"},
    {id: 9, amount:"$ 16000"},
    {id: 10, amount:"$ 32000"},
    {id: 11, amount:"$ 64000"},
    {id: 12, amount:"$ 125000"},
    {id: 13, amount:"$ 250000"},
    {id: 14, amount:"$ 500000"},
    {id: 15, amount:"$ 1000000"},

  ].reverse(),
  []
  );

  useEffect(()=>{
    questionNumber >1 && 
    setEarned(moneyPyramid.find((m)=> m.id === questionNumber - 1).amount);
  },[moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
        <div className="main">
      {stop? (
      <h1 className="endText">You earned:{earned}</h1>
    ):(
      <>
      <div className="top">
        <div className="timer">
          <Timer setStop= {setStop}questionNumber={questionNumber}

        /></div>
    </div>
    
    <div className="bottom">
      <Aish
      data={data} 
      setStop={setStop} 
      questionNumber={questionNumber}
      setQuestionNumber={setQuestionNumber}
      /></div>
      </>
    )}
      
    </div>
    <div className="pyramid">
    <ul className="moneyList">
      {moneyPyramid.map(m=> (

      
      <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"} >
        <span className="moneyListItemNumber">{m.id}</span>
        <span className="moneyListItemAmount">{m.amount}</span>
        </li>
        ))}
   
    </ul>
    </div>
    </>
      ) :(
      <Start setUsername={setUsername}/>
      )}
    
    </div>
    
  );
      }

export default App;
