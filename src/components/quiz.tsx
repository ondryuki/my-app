import React, { useState } from "react";
import Question from "./question/question";
import Answer from "./answer/answer";


const Quiz = () => {

  // ============== state ==============

  // questionsから持ってきたquestionsを入れておくstate
  const [fiveQuestions, setFiveQuestions] = React.useState([
    {
      id: 1,
      name: "",
      question: "",
      select: [
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
      ],
      explanation: "",
      answer: "",
    },
    {
      id: 2,
      name: "",
      question: "",
      select: [
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
      ],
      explanation: "",
      answer: "",
    },
    {
      id: 3,
      name: "",
      question: "",
      select: [
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
      ],
      explanation: "",
      answer: "",
    },
    {
      id: 4,
      name: "",
      question: "",
      select: [
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
      ],
      explanation: "",
      answer: "",
    },
    {
      id: 5,
      name: "",
      question: "",
      select: [
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
      ],
      explanation: "",
      answer: "",
    },
  ]);

  // answerの結果を保持するためのstate
  const [quizAnswer1, setAnswer1] = useState([
    {
      name: "",
      selectedAnswer: "",
      isCorrect: false,
    },
  ]);
  const [quizAnswer2, setAnswer2] = useState([
    {
      name: "",
      selectedAnswer: "",
      isCorrect: false,
    },
  ]);
  const [quizAnswer3, setAnswer3] = useState([
    {
      name: "",
      selectedAnswer: "",
      isCorrect: false,
    },
  ]);
  const [quizAnswer4, setAnswer4] = useState([
    {
      name: "",
      selectedAnswer: "",
      isCorrect: false,
    },
  ]);
  const [quizAnswer5, setAnswer5] = useState([
    {
      name: "",
      selectedAnswer: "",
      isCorrect: false,
    },
  ]);

  // question、answer切り替えのためのstate
  const [answerPage, setAnswerPage] = useState(false);

  // ============== html ==============  
  return (
    <div>
      {!answerPage && (
        <Question
          quizAnswer1={quizAnswer1}
          setAnswer1={setAnswer1}
          quizAnswer2={quizAnswer2}
          setAnswer2={setAnswer2}
          quizAnswer3={quizAnswer3}
          setAnswer3={setAnswer3}
          quizAnswer4={quizAnswer4}
          setAnswer4={setAnswer4}
          quizAnswer5={quizAnswer5}
          setAnswer5={setAnswer5}
          answerPage={answerPage}
          setAnswerPage={setAnswerPage}
          fiveQuestions={fiveQuestions}
          setFiveQuestions={setFiveQuestions}
        />
      )}
      {answerPage && (
        <Answer
          quizAnswer1={quizAnswer1}
          setAnswer1={setAnswer1}
          quizAnswer2={quizAnswer2}
          setAnswer2={setAnswer2}
          quizAnswer3={quizAnswer3}
          setAnswer3={setAnswer3}
          quizAnswer4={quizAnswer4}
          setAnswer4={setAnswer4}
          quizAnswer5={quizAnswer5}
          setAnswer5={setAnswer5}
          answerPage={answerPage}
          setAnswerPage={setAnswerPage}
          fiveQuestions={fiveQuestions}
          setFiveQuestions={setFiveQuestions}
        />
      )}
    </div>
  );
};

export default Quiz;
