import { useEffect } from "react";
import { useState } from "react";


export default function Aish({
    data,
    setStop,
    questionNumber,
    setQuestionNumber,
}
    ) {
        const [question, setQuestion] = useState(null);
        const [selectedAnswer , setSelectedAnswer]= useState(null);
        const [className,setClassname] = useState("answer");
        useEffect(() => {
            setQuestion(data[questionNumber - 1]);

        },[data, questionNumber]);

        const delay=(duration , callback)=>{
            setTimeout(() => {
                callback();
            }, duration);

        };
        
    const handleClick=(a)=>{
        setSelectedAnswer(a);
        setClassname("answer active");
        delay(3000, () =>
        setClassname(a.correct ? "answer correct":"answer wrong") 
        );
        delay(6000, () =>{
            if(a.correct){
                setQuestionNumber((prev)=>prev + 1);
                setSelectedAnswer(null);

            }else{
                setStop(true);
            }
        }
        
        );
        

    };    
  return (
    <div className="Aish">
        <div className="question">{question?.question}</div>
        <div className="answers">
            {question?.answers.map((a) =>(
            <div className={selectedAnswer === a? className :"answer"} onClick={()=>handleClick(a)}>{a.text}</div>
              ))}
        </div>

    </div>
  );
            }