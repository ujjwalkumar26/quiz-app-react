import { Questions } from '../custom/Questions';
import { useState,useContext } from 'react';
import { QuizContext } from '../custom/contexts';
import {Button, Image} from 'semantic-ui-react';
import React from 'react'
import '../App.css'
function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState();
    var [selected,setSelected] = useState({first: false, second: false});
    // eslint-disable-next-line
    const {status,setStatus,score,setScore,name,setName,category,setCategory} = useContext(QuizContext);
  
    const nextQuestion = () => {
        if (Questions[category-1][currentQuestion].answer === optionChosen) {
          setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
        setOptionChosen();
        setSelected({first: false, second: false});
      };
    const finishQuiz = () => {
        if (Questions[category-1][currentQuestion].answer === optionChosen) {
          setScore(score + 1);
        }
        setStatus("end");
      };
    return(
        <div className='Quiz'>
        <h1>{Questions[category-1][currentQuestion].prompt}</h1>
        <Image.Group size='medium'>
            <Image 
            src={require(`../images/questionImages/${category}/q${currentQuestion+1}a.png`).default}
            onClick={()=>{setOptionChosen("a");setSelected({first: true,second:false})}}
            style={{width: '200px', height: '200px'}}
            alt ="Option A"
            disabled={selected.first}
            />
            <Image
            src={require(`../images/questionImages/${category}/q${currentQuestion+1}b.png`).default}
            onClick={()=>{setOptionChosen("b");setSelected({first: false,second:true})}}
            style={{width: '200px', height: '200px'}}
            alt ="Option B"
            disabled={selected.second}
            />
        </Image.Group>
        {optionChosen==='a' && <h1>Your Choice - A</h1>}
        {optionChosen==='b' && <h1>Your Choice - B</h1>}
        <br/>
        {currentQuestion === Questions[category-1].length - 1 ? (
            <Button inverted color='violet' onClick={finishQuiz} >
             Finish Quiz
            </Button>
            ) : (
            <Button inverted color='violet' onClick={nextQuestion} >
            Next Question
            </Button>
        )}



        </div>
    )



}
export default Quiz;