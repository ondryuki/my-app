import React from "react";
import questions from "../question/questions";
// import quiz from '../quiz';
import "../../css/App.css";

console.log(questions);

type answerArray = {
  name: string;
  selectedAnswer: string;
  isCurrect: boolean;
}[];

type quizProps = {
  quizAnswer1: answerArray;
  quizAnswer2: answerArray;
  quizAnswer3: answerArray;
  quizAnswer4: answerArray;
  quizAnswer5: answerArray;
  className: string;
  // displayExplanation1: () => string;
};

// ====== function (本当は一つにまとめたいのがいくつか…) ====== 

// 
function Answer(props: quizProps) {
  function displayIsCurrect1() {
    if (props.quizAnswer1[0].isCurrect === true) {
      return "正解";
    } else {
      return "不正解";
    }
  }
  function displayIsCurrect2() {
    if (props.quizAnswer2[0].isCurrect === true) {
      return "正解";
    } else {
      return "不正解";
    }
  }
  function displayIsCurrect3() {
    if (props.quizAnswer3[0].isCurrect === true) {
      return "正解";
    } else {
      return "不正解";
    }
  }
  function displayIsCurrect4() {
    if (props.quizAnswer4[0].isCurrect === true) {
      return "正解";
    } else {
      return "不正解";
    }
  }
  function displayIsCurrect5() {
    if (props.quizAnswer5[0].isCurrect === true) {
      return "正解";
    } else {
      return "不正解";
    }
  }

  // 解説の表示
  // function displayExplanation1() {
  //   console.log(questions[0].explanation);
  //   console.log(questions[0].name);
  //   console.log(props.quizAnswer1[0].name);

  //   questions.forEach((question) => {
  //     if (props.quizAnswer1[0].name === question.name) {
  //       return question.explanation;
  //     } else {
  //       console.log(question.explanation);
  //       return question.explanation;
  //     }
  //   })
  // }

  // JSX

  // {displayExplanation1()}

  return (
    <div className="answer">
      <main className="answer-main">
        <div className="answer-answers">
          <h2 className="answer-title">答え合わせ</h2>
          <div className="answer-answer">
            <h3 className="answer-number">Q1</h3>
            <p className="answer-result">{displayIsCurrect1()}</p>
            <p className="answer-sentense"></p>
          </div>
          <div className="answer-answer">
            <h3 className="answer-number">Q2</h3>
            <p className="answer-result">{displayIsCurrect2()}</p>
            <p className="answer-sentense">あ</p>
          </div>
          <div className="answer-answer">
            <h3 className="answer-number">Q3</h3>
            <p className="answer-result">{displayIsCurrect3()}</p>
            <p className="answer-sentense">あ</p>
          </div>
          <div className="answer-answer">
            <h3 className="answer-number">Q4</h3>
            <p className="answer-result">{displayIsCurrect4()}</p>
            <p className="answer-sentense">あ</p>
          </div>
          <div className="answer-answer">
            <h3 className="answer-number">Q5</h3>
            <p className="answer-result">{displayIsCurrect5()}</p>
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
