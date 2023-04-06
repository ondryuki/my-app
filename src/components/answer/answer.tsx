import React from "react";
import questions from "../questions";
// import quiz from '../quiz';
import "../../css/App.css";

// ========= propsの型定義 =========

type answerArray = {
  name: string;
  selectedAnswer: string;
  isCurrect: boolean;
}[];

type quizProps = {
  answerPage: boolean;
  quizAnswer1: answerArray;
  quizAnswer2: answerArray;
  quizAnswer3: answerArray;
  quizAnswer4: answerArray;
  quizAnswer5: answerArray;
  setAnswer1: (props: answerArray) => void;
  setAnswer2: (props: answerArray) => void;
  setAnswer3: (props: answerArray) => void;
  setAnswer4: (props: answerArray) => void;
  setAnswer5: (props: answerArray) => void;
  setAnswerPage: (props: boolean) => void;
  fiveQuestions: {
    id: number,
    name: string,
    question: string,
    select: string[][],
    explanation: string,
    answer: string,
  }[];
  setFiveQuestions: (props: any) => void;
};

// ========= Answer function =========
function Answer(props: quizProps) {

  console.log('↓answerでquestions出した時↓');
  console.log(questions);
  // ========= function =========
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

  function handleSubmitAnswer() {
    console.log(props.fiveQuestions);
    window.scrollTo({ top: 0, behavior: "smooth" });
    const emptyAnswer = [{
      name: "",
      selectedAnswer: "",
      isCurrect: false,
    }];
    props.setAnswer1(emptyAnswer);
    props.setAnswer2(emptyAnswer);
    props.setAnswer3(emptyAnswer);
    props.setAnswer4(emptyAnswer);
    props.setAnswer5(emptyAnswer);

    // function shuffledQuestion() {
    //   for (let i = out.length - 1; i > 0; i--) {
    //     const r = Math.floor(Math.random() * (i + 1));
    //     const tmp = out[i];
    //     out[i] = out[r];
    //     out[r] = tmp;
    //   }
    //   return out.splice(5);
    // }
    // console.log(props.fiveQuestions);
    // props.setFiveQuestions(shuffledQuestion);
    props.setAnswerPage(false);
  }

  function displayExplanation1() {
    const explanation = props.fiveQuestions.map((question) => {
      if (props.quizAnswer1[0].name === question.name) {
        return props.fiveQuestions[0].explanation;
      }
      return "";
    });
    return explanation;
  }

  function displayExplanation2() {
    const explanation = props.fiveQuestions.map((question) => {
      if (props.quizAnswer2[0].name === question.name) {
        return question.explanation;
      }
      return "";
    });
    return explanation;
  }
  function displayExplanation3() {
    const explanation = props.fiveQuestions.map((question) => {
      console.log(question.name);
      if (props.quizAnswer3[0].name === question.name) {
        return question.explanation;
      }
      return "";
    });
    return explanation;
  }
  function displayExplanation4() {
    const explanation = props.fiveQuestions.map((question) => {
      if (props.quizAnswer4[0].name === question.name) {
        return question.explanation;
      }
      return "";
    });
    return explanation;
  }
  function displayExplanation5() {
    const explanation = props.fiveQuestions.map((question) => {
      if (props.quizAnswer5[0].name === question.name) {
        return question.explanation;
      }
      return "";
    });
    return explanation;
  }

  // ========= jsx =========

  return (
    <div className="answer">
      <main className="answer-main">
        <div className="answer-answers">
          <h2 className="answer-title">答え合わせ</h2>
          <div className="answer-answer">
            <h3 className="answer-number">Q1</h3>
            <p className="answer-result">{displayIsCurrect1()}</p>
            <p className="answer-sentense">{displayExplanation1()}</p>
          </div>
          <div className="answer-answer">
            <h3 className="answer-number">Q2</h3>
            <p className="answer-result">{displayIsCurrect2()}</p>
            <p className="answer-sentense">{displayExplanation2()}</p>
          </div>
          <div className="answer-answer">
            <h3 className="answer-number">Q3</h3>
            <p className="answer-result">{displayIsCurrect3()}</p>
            <p className="answer-sentense">{displayExplanation3()}</p>
          </div>
          <div className="answer-answer">
            <h3 className="answer-number">Q4</h3>
            <p className="answer-result">{displayIsCurrect4()}</p>
            <p className="answer-sentense">{displayExplanation4()}</p>
          </div>
          <div className="answer-answer">
            <h3 className="answer-number">Q5</h3>
            <p className="answer-result">{displayIsCurrect5()}</p>
            <p className="answer-sentense">{displayExplanation5()}</p>
          </div>
          <button
            className="answer-button"
            type="button"
            onClick={handleSubmitAnswer}
          >
            再チャレンジ
          </button>
        </div>
      </main>
    </div>
  );
}

export default Answer;
