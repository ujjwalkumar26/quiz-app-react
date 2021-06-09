import React from 'react';
import './App.css';
import End from './components/End';
import Home from './components/Home';
import Quiz from './components/Quiz';
import { useState } from 'react';
import {QuizContext} from './custom/contexts';
function App() {
  var [status, setStatus] = useState("home");
  var [score, setScore] = useState(0);
  var [name,setName] = useState("Flamboyant Kumar");
  var [category,setCategory]= useState(1);
  return (
    <div className="App">
     <QuizContext.Provider
        value={{
          status,
          setStatus,
          score,
          setScore,
          name,
          setName,
          category,
          setCategory
        }}
      >
        {status === "home" && <Home />}
        {status === "quiz" && <Quiz />}
        {status === "end" && <End />}
        </QuizContext.Provider>
    </div>
  );
}

export default App;
