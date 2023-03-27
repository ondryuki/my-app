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
  const [page, setPage] = useState({
    pageNow: 'question'
  })

  function testtest(){
    console.log(quizQuestions)
  }
  
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
         setPage={setPage}
         style={{ display: page.pageNow === 'question' ? 'block' : 'none' }}
         />
        <Answer
         style={{ display: page.pageNow === 'answer' ? 'block' : 'none' }}
         />
      </div>
    );
}

export default Quiz;
