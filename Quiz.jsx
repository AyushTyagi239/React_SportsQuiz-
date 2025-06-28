import { useState, useCallback, useRef } from "react";
import Questions from "../questions.js";
import Summary from "./Summary.jsx";

import Question from "./Question.jsx";

export default function Quiz() {
   const [userAnswers, setUserAnswers] = useState([]);
 //  const [answerState, setAnswerState] = useState('');
  const activeQuestionIndex = userAnswers.length ;
    
  
  
  const quizIsCompleted = activeQuestionIndex === Questions.length;

 const handleSelectAnswer = useCallback(
  function handleSelectAnswer(selectedAnswer) {
    
    

    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });

   
    
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsCompleted) {
  return  <Summary userAnswers={userAnswers}/>
  }

 

  return (
    <div id="quiz">
      <Question
      key= {activeQuestionIndex}
      index= {activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}