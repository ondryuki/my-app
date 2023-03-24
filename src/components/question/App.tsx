import React, { useState } from 'react';
import questions from './questions';
import '../../css/App.css';
import type { MouseEvent, ChangeEvent } from 'react';

function App() {
  // state
  const [quizQuestions, setquiz] = useState([
    {
      name: '',
      selectedAnswer: '',
      isCurrect: false,
    },
    {
      name: '',
      selectedAnswer: '',
      isCurrect: false,
    },
    {
      name: '',
      selectedAnswer: '',
      isCurrect: false,
    },
    {
      name: '',
      selectedAnswer: '',
      isCurrect: false,
    },
    {
      name: '',
      selectedAnswer: '',
      isCurrect: false,
    },
  ])

  function switchPage() {
    console.log('switch');
  }

  let [isMobile, setIsMobile] = useState(false);

  // Event of 'Answer' button
  const handleSubmitAnswer = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('click event');
    if (
      quizQuestions[0].name === '' ||
      quizQuestions[1].name === '' ||
      quizQuestions[2].name === '' ||
      quizQuestions[3].name === '' ||
      quizQuestions[4].name === '') {
      isMobile = false;
    } else {
      isMobile = true;
      switchPage();
    }
    console.log(isMobile);
  }

  // Events of radio buttons
  const handleRadioButton1 = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    quizQuestions[0].name = e.target.name;
    quizQuestions[0].selectedAnswer = e.target.id;
    if (e.target.id === questions[0].answer) {
      quizQuestions[0].isCurrect = true;
    } else {
      quizQuestions[0].isCurrect = false;
    }
    console.log(quizQuestions);
  }
  const handleRadioButton2 = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    quizQuestions[1].name = e.target.name;
    quizQuestions[1].selectedAnswer = e.target.id;
    if (e.target.id === questions[1].answer) {
      quizQuestions[1].isCurrect = true;
    } else {
      quizQuestions[1].isCurrect = false;
    }
    console.log(quizQuestions);
  }
  const handleRadioButton3 = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    console.log(quizQuestions[2].name);
    quizQuestions[2].name = e.target.name;
    quizQuestions[2].selectedAnswer = e.target.id;
    if (e.target.id === questions[2].answer) {
      quizQuestions[2].isCurrect = true;
    } else {
      quizQuestions[2].isCurrect = false;
    }
    console.log(quizQuestions);
  }
  const handleRadioButton4 = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    quizQuestions[3].name = e.target.name;
    quizQuestions[3].selectedAnswer = e.target.id;
    if (e.target.id === questions[3].answer) {
      quizQuestions[3].isCurrect = true;
    } else {
      quizQuestions[3].isCurrect = false;
    }
    console.log(quizQuestions);
  }
  const handleRadioButton5 = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    quizQuestions[4].name = e.target.name;
    quizQuestions[4].selectedAnswer = e.target.id;
    if (e.target.id === questions[4].answer) {
      quizQuestions[4].isCurrect = true;
    } else {
      quizQuestions[4].isCurrect = false;
    }
    console.log(quizQuestions);
  }

  // content
  return (
    <main className="question-main">
      <div className="question-questions">
        <form action="">
          <div className="question-questions">
            <h2 className="question-number">Q1</h2>
            <p className="question-sentense">
              {questions[0].question}
            </p>
            <div>
              <label className="question-label" htmlFor={questions[0].select[0][1]} >
                <input name={questions[0].name} type="radio" id={questions[0].select[0][1]} onChange={handleRadioButton1} required />
                {questions[0].select[0][0]}
              </label>
            </div>
            <div>
              <label className="question-label" htmlFor={questions[0].select[1][1]} >
                <input name={questions[0].name} type="radio" id={questions[0].select[1][1]} onChange={handleRadioButton1} required />
                {questions[0].select[1][0]}
              </label>
            </div>
            <div>
              <label className="question-label" htmlFor={questions[0].select[2][1]} >
                <input name={questions[0].name} type="radio" id={questions[0].select[2][1]} onChange={handleRadioButton1} required />
                {questions[0].select[2][0]}
              </label>
            </div>
            <div>
              <label className="question-label" htmlFor={questions[0].select[3][1]} >
                <input name={questions[0].name} type="radio" id={questions[0].select[3][1]} onChange={handleRadioButton1} required />
                {questions[0].select[3][0]}
              </label>
            </div>
          </div>
          <div className="question-questions">
            <h2 className="question-number">Q2</h2>
            <p className="question-sentense">
              {questions[1].question}
            </p>
            <div>
              <label className="question-label" htmlFor={questions[1].select[0][1]} >
                <input name={questions[1].name} type="radio" id={questions[1].select[0][1]} onChange={handleRadioButton2} required />
                {questions[1].select[0][0]}
              </label>
            </div>
            <div>
              <label className="question-label" htmlFor={questions[1].select[1][1]} >
                <input name={questions[1].name} type="radio" id={questions[1].select[1][1]} onChange={handleRadioButton2} required />
                {questions[1].select[1][0]}
              </label>
            </div>
            <div>
              <label className="question-label" htmlFor={questions[1].select[2][1]} >
                <input name={questions[1].name} type="radio" id={questions[1].select[2][1]} onChange={handleRadioButton2} required />
                {questions[1].select[2][0]}
              </label>
            </div>
            <div>
              <label className="question-label" htmlFor={questions[1].select[3][1]} >
                <input name={questions[1].name} type="radio" id={questions[1].select[3][1]} onChange={handleRadioButton2} required />
                {questions[1].select[3][0]}
              </label>
            </div>
          </div>
          <div className="question-questions">
            <h2 className="question-number">Q3</h2>
            <p className="question-sentense">
              {questions[2].question}
            </p>
            <div>
              <label className="question-label" htmlFor={questions[2].select[0][1]} >
                <input name={questions[2].name} type="radio" id={questions[2].select[0][1]} onChange={handleRadioButton3} required />
                {questions[2].select[0][0]}
              </label>
            </div>
            <div>
              <label className="question-label" htmlFor={questions[2].select[1][1]} >
                <input name={questions[2].name} type="radio" id={questions[2].select[1][1]} onChange={handleRadioButton3} required />
                {questions[2].select[1][0]}
              </label>
            </div>
            <div>
              <label className="question-label" htmlFor={questions[2].select[2][1]} >
                <input name={questions[2].name} type="radio" id={questions[2].select[2][1]} onChange={handleRadioButton3} required />
                {questions[2].select[2][0]}
              </label>
            </div>
            <div>
              <label className="question-label" htmlFor={questions[2].select[3][1]} >
                <input name={questions[2].name} type="radio" id={questions[2].select[3][1]} onChange={handleRadioButton3} required />
                {questions[2].select[3][0]}
              </label>
            </div>
          </div>
          <div className="question-questions">
            <h2 className="question-number">Q4</h2>
            <p className="question-sentense">
              {questions[3].question}
            </p>
            <div>
              <label className="question-label" htmlFor={questions[3].select[0][1]} >
                <input name={questions[3].name} type="radio" id={questions[3].select[0][1]} onChange={handleRadioButton4} required />
                {questions[3].select[0][0]}
              </label>
            </div>
            <div>
              <label className="question-label" htmlFor={questions[3].select[1][1]} >
                <input name={questions[3].name} type="radio" id={questions[3].select[1][1]} onChange={handleRadioButton4} required />
                {questions[3].select[1][0]}
              </label>
            </div>
            <div>
              <label className="question-label" htmlFor={questions[3].select[2][1]} >
                <input name={questions[3].name} type="radio" id={questions[3].select[2][1]} onChange={handleRadioButton4} required />
                {questions[3].select[2][0]}
              </label>
            </div>
            <div>
              <label className="question-label" htmlFor={questions[3].select[3][1]} >
                <input name={questions[3].name} type="radio" id={questions[3].select[3][1]} onChange={handleRadioButton4} required />
                {questions[3].select[3][0]}
              </label>
            </div>
          </div>
          <div className="question-questions">
            <h2 className="question-number">Q5</h2>
            <p className="question-sentense">
              {questions[4].question}
            </p>
            <div>
              <label className="question-label" htmlFor={questions[4].select[0][1]} >
                <input name={questions[4].name} type="radio" id={questions[4].select[0][1]} onChange={handleRadioButton5} required />
                {questions[4].select[0][0]}
              </label>
            </div>
            <div>
              <label className="question-label" htmlFor={questions[4].select[1][1]} >
                <input name={questions[4].name} type="radio" id={questions[4].select[1][1]} onChange={handleRadioButton5} required />
                {questions[4].select[1][0]}
              </label>
            </div>
            <div>
              <label className="question-label" htmlFor={questions[4].select[2][1]} >
                <input name={questions[4].name} type="radio" id={questions[4].select[2][1]} onChange={handleRadioButton5} required />
                {questions[4].select[2][0]}
              </label>
            </div>
            <div>
              <label className="question-label" htmlFor={questions[4].select[3][1]} >
                <input name={questions[4].name} type="radio" id={questions[4].select[3][1]} onChange={handleRadioButton5} required />
                {questions[4].select[3][0]}
              </label>
            </div>
            <div className="question-submit">
              <p className="question-caution">
                ＼ 未回答の問題があります ／
              </p>

              <button
                type="submit"
                className="question-button"
                onClick={handleSubmitAnswer}
              >
                回答
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;
