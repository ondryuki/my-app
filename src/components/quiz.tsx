import React, { useState } from 'react';
import Question from '../components/question/App';
import Answer from '../components/answer/App';

const Quiz = () => {

  // ＝＝＝＝＝ state ＝＝＝＝＝

  // answerの結果を保持するためのstate
  const [quizAnswer1, setAnswer1] = useState([
    {
      name: '',
      selectedAnswer: '',
      isCurrect: false,
    },
  ])
  const [quizAnswer2, setAnswer2] = useState([
    {
      name: '',
      selectedAnswer: '',
      isCurrect: false,
    },
  ])
  const [quizAnswer3, setAnswer3] = useState([
    {
      name: '',
      selectedAnswer: '',
      isCurrect: false,
    },
  ])
  const [quizAnswer4, setAnswer4] = useState([
    {
      name: '',
      selectedAnswer: '',
      isCurrect: false,
    },
  ])
  const [quizAnswer5, setAnswer5] = useState([
    {
      name: '',
      selectedAnswer: '',
      isCurrect: false,
    },
  ])

  // question、answer切り替えのためのstate
  const [answerPage, setAnswerPage] = useState(false)

  // setInterval(testtest, 5000);
    return (
      <div>
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
         className={answerPage ? 'question-hide' : 'question-show' }
         />
        <Answer
         className={answerPage ? 'answer-show' : 'answer-hide' }
         quizAnswer1={quizAnswer1}
         quizAnswer2={quizAnswer2}
         quizAnswer3={quizAnswer3}
         quizAnswer4={quizAnswer4}
         quizAnswer5={quizAnswer5}
         />
      </div>
    );
}

export default Quiz;
