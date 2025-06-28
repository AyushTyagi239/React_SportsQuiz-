import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useState } from "react";
import questions from "../questions";

export default function Question({
  index,
  onSelectAnswer,
  onSkipAnswer,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  });

  function handleSelectAnswer(answerText) {
    setAnswer({
      selectedAnswer: answerText,
      isCorrect: null
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answerText,
        isCorrect: questions[index].answers[0] === answerText
      });

      setTimeout(() => {
        onSelectAnswer(answerText);
      }, 2000);
    }, 1000);
  }

  let answerState ="";
  if (answer.selectedAnswer && answer.isCorrect !== null){
    answerState = answer.isCorrect? 'correct': 'wrong';
  }
  else if(answer.selectedAnswer){
    answerState= 'answered';
  }
let timer ='10000';
if (answer.selectedAnswer){
  timer = 1000;
}
if (answer.isCorrect !== null){
  timer = 2000;
}

  return (
    <div id="question">
      <QuestionTimer
        timeout={timer}
        key={timer}
        onTimeout={answer.selectedAnswer ===''? onSkipAnswer: null}
        mode={answerState}
      />

      <h2>{questions[index].text}</h2>
      <Answers
        answers={questions[index].answers}
        selectedAnswers={answer.selectedAnswer}
        answerState={answerState} 
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
