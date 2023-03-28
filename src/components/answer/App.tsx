import React from 'react';
// import Question from '../question/App';
import '../../css/App.css';

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
  className: string;
}



function Answer(props: quizProps) {
  return (
    <div className="answer">
      <main className="answer-main">
        <div className="answer-answers">
          <h2 className="answer-title">答え合わせ</h2>
          <div className="answer-answer">
            <h3 className="answer-number">Q1</h3>
            <p className="answer-result">正解</p>
            <p className="answer-sentense">あ</p>
          </div>
          <div className="answer-answer">
            <h3 className="answer-number">Q2</h3>
            <p className="answer-result">正解</p>
            <p className="answer-sentense">あ</p>

          </div>
          <div className="answer-answer">
            <h3 className="answer-number">Q3</h3>
            <p className="answer-result">正解</p>
            <p className="answer-sentense">あ</p>

          </div>
          <div className="answer-answer">
            <h3 className="answer-number">Q4</h3>
            <p className="answer-result">正解</p>
            <p className="answer-sentense">あ</p>

          </div>
          <div className="answer-answer">
            <h3 className="answer-number">Q5</h3>
            <p className="answer-result">正解</p>
            <p className="answer-sentense">あ</p>

          </div>
          <button className="answer-button" type="button">
            再チャレンジする
          </button>
        </div>
      </main>
    </div>
  );
}

export default Answer;
