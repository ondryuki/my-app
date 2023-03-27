// import React from 'react';
import questions from './questions';
import '../../css/App.css';
import type { MouseEvent, ChangeEvent } from 'react';

type answerArray = {
  name: string,
  selectedAnswer: string,
  isCurrect: boolean,
}[];

type quizProps = {
  quizAnswer1: answerArray;
  quizAnswer2: answerArray;
  quizAnswer3: answerArray;
  quizAnswer4: answerArray;
  quizAnswer5: answerArray;
  changePage: boolean;
  setAnswer1: (props: answerArray) => void;
  setAnswer2: (props: answerArray) => void;
  setAnswer3: (props: answerArray) => void;
  setAnswer4: (props: answerArray) => void;
  setAnswer5: (props: answerArray) => void;
  setChangePage: (props: boolean) => void;
}

function Question(props: quizProps) {
  // Event of 'Answer' button
  const handleSubmitAnswer = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      props.quizAnswer1[0].name === '' ||
      props.quizAnswer2[0].name === '' ||
      props.quizAnswer3[0].name === '' ||
      props.quizAnswer4[0].name === '' ||
      props.quizAnswer5[0].name === '') {
      console.log(props.quizAnswer1[0].name);
      console.log(props.quizAnswer2[0].name);
      console.log(props.quizAnswer3[0].name);
      console.log(props.quizAnswer4[0].name);
      console.log(props.quizAnswer5[0].name);
    } else {
      props.setChangePage(true);
      console.log(props.changePage);
    }
  }

  // Array
  const answerArray1: answerArray = [];
  const answerArray2: answerArray = [];
  const answerArray3: answerArray = [];
  const answerArray4: answerArray = [];
  const answerArray5: answerArray = [];

  // Events of radio buttons
  const handleRadioButton1 = (e: ChangeEvent<HTMLInputElement>) => {
    props.quizAnswer1.forEach(answer => {
      console.log(questions[0].answer);
      if (e.target.id === questions[0].answer) {
        answerArray1.push({
          ...answer,
          name: e.target.name,
          selectedAnswer: e.target.id,
          isCurrect: true,
        });
      } else {
        answerArray1.push({
          ...answer,
          name: e.target.name,
          selectedAnswer: e.target.id,
          isCurrect: false,
        });
      }
    });
    props.setAnswer1(answerArray1);
  }

  const handleRadioButton2 = (e: ChangeEvent<HTMLInputElement>) => {
    props.quizAnswer2.forEach(answer => {
      if (e.target.id === questions[1].answer) {
        answerArray2.push({
          ...answer,
          name: e.target.name,
          selectedAnswer: e.target.id,
          isCurrect: true,
        });
      } else {
        answerArray2.push({
          ...answer,
          name: e.target.name,
          selectedAnswer: e.target.id,
          isCurrect: false,
        });
      }
    });
    props.setAnswer2(answerArray2);
  }

  const handleRadioButton3 = (e: ChangeEvent<HTMLInputElement>) => {
    props.quizAnswer3.forEach(answer => {
      if (e.target.id === questions[2].answer) {
        answerArray3.push({
          ...answer,
          name: e.target.name,
          selectedAnswer: e.target.id,
          isCurrect: true,
        });
      } else {
        answerArray3.push({
          ...answer,
          name: e.target.name,
          selectedAnswer: e.target.id,
          isCurrect: false,
        });
      }
    });
    props.setAnswer3(answerArray3);
  }

  const handleRadioButton4 = (e: ChangeEvent<HTMLInputElement>) => {
    props.quizAnswer4.forEach(answer => {
      if (e.target.id === questions[3].answer) {
        answerArray4.push({
          ...answer,
          name: e.target.name,
          selectedAnswer: e.target.id,
          isCurrect: true,
        });
      } else {
        answerArray4.push({
          ...answer,
          name: e.target.name,
          selectedAnswer: e.target.id,
          isCurrect: false,
        });
      }
    });
    props.setAnswer4(answerArray4);
  }

  const handleRadioButton5 = (e: ChangeEvent<HTMLInputElement>) => {
    props.quizAnswer5.forEach(answer => {
      if (e.target.id === questions[4].answer) {
        answerArray5.push({
          ...answer,
          name: e.target.name,
          selectedAnswer: e.target.id,
          isCurrect: true,
        });
      } else {
        answerArray5.push({
          ...answer,
          name: e.target.name,
          selectedAnswer: e.target.id,
          isCurrect: false,
        });
      }
    });
    props.setAnswer5(answerArray5);
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
  // return ();
}

export default Question;
