import React from "react";
import "../App.css";
import { useContext } from 'react';
import { QuizContext } from '../custom/contexts';
import { Questions } from '../custom/Questions';
import {Header,Button} from 'semantic-ui-react';

const EndScreen = () => {
    // eslint-disable-next-line
  const {status,setStatus,score,setScore,name,setName,category,setCategory} = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setStatus("home");
  };
  return (
    <div className="End">
      <Header size='huge' color='pink'>QUIZ FINISHED</Header>
      <h3 className='white'>{name}, your score is:</h3>
      <h1 className='white'>
        {score} / {Questions[category-1].length}
      </h1>
      <Button size='massive' basic inverted color='purple' onClick={restartQuiz}>
             Restart the Quiz
    </Button>
    </div>
  );
};

export default EndScreen;