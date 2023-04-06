import questions from "../questions";
import { getRandomElementsFromArray } from "../shuffle";
import "../../css/App.css";
import type { MouseEvent, ChangeEvent } from "react";
import { useEffect } from "react";

type answerArray = {
  name: string;
  selectedAnswer: string;
  isCorrect: boolean;
}[];

type quizProps = {
  quizAnswer1: answerArray;
  quizAnswer2: answerArray;
  quizAnswer3: answerArray;
  quizAnswer4: answerArray;
  quizAnswer5: answerArray;
  answerPage: boolean;
  setAnswer1: (props: answerArray) => void;
  setAnswer2: (props: answerArray) => void;
  setAnswer3: (props: answerArray) => void;
  setAnswer4: (props: answerArray) => void;
  setAnswer5: (props: answerArray) => void;
  setAnswerPage: (props: boolean) => void;
  fiveQuestions: {
    id: number;
    name: string;
    question: string;
    select: string[][];
    explanation: string;
    answer: string;
  }[];
  setFiveQuestions: (props: any) => void;
};

function Question(props: quizProps) {
  // questionsの問題の情報をランダムに5つ抜き出して更新関数へ
  useEffect(() => {
    props.setFiveQuestions([]);
    props.setFiveQuestions(getRandomElementsFromArray(questions));
  }, []);

  // === 「回答」ボタンをクリック時のイベント ===
  const handleSubmitAnswer = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      props.quizAnswer1[0].name === "" ||
      props.quizAnswer2[0].name === "" ||
      props.quizAnswer3[0].name === "" ||
      props.quizAnswer4[0].name === "" ||
      props.quizAnswer5[0].name === ""
    ) {
      props.setAnswerPage(false);
      const caution = document.getElementsByClassName(
        "question-cautionSentense"
      )[0];
      caution.classList.add("show");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      props.setAnswerPage(true);
    }
  };

  // ===== ラジオボタン選択時のイベント =====

  const handleRadioButton1 = (e: ChangeEvent<HTMLInputElement>) => {
    const answerArray1 = props.quizAnswer1.map((answer) => ({
      ...answer,
      name: e.target.name,
      selectedAnswer: e.target.id,
      isCorrect: e.target.id === props.fiveQuestions[0].answer,
    }));
    props.setAnswer1(answerArray1);
  };

  const handleRadioButton2 = (e: ChangeEvent<HTMLInputElement>) => {
    const answerArray2 = props.quizAnswer2.map((answer) => ({
      ...answer,
      name: e.target.name,
      selectedAnswer: e.target.id,
      isCorrect: e.target.id === props.fiveQuestions[1].answer,
    }));
    props.setAnswer2(answerArray2);
  };

  const handleRadioButton3 = (e: ChangeEvent<HTMLInputElement>) => {
    const answerArray3 = props.quizAnswer3.map((answer) => ({
      ...answer,
      name: e.target.name,
      selectedAnswer: e.target.id,
      isCorrect: e.target.id === props.fiveQuestions[2].answer,
    }));
    props.setAnswer3(answerArray3);
  };

  const handleRadioButton4 = (e: ChangeEvent<HTMLInputElement>) => {
    const answerArray4 = props.quizAnswer4.map((answer) => ({
      ...answer,
      name: e.target.name,
      selectedAnswer: e.target.id,
      isCorrect: e.target.id === props.fiveQuestions[3].answer,
    }));
    props.setAnswer4(answerArray4);
  };

  const handleRadioButton5 = (e: ChangeEvent<HTMLInputElement>) => {
    const answerArray5 = props.quizAnswer5.map((answer) => ({
      ...answer,
      name: e.target.name,
      selectedAnswer: e.target.id,
      isCorrect: e.target.id === props.fiveQuestions[4].answer,
    }));
    props.setAnswer5(answerArray5);
  };

  // ============== 変数 ==============
  const questionContents = props.fiveQuestions;

  // ============== html ==============
  return (
    <main className="question-main">
      <div className="question-questions">
        <form action="">
          <div className="question-questions">
            {questionContents.map((question, index) => (
              <div key={index} className="question-questions">
                <h2 className="question-number">{`Q${index + 1}`}</h2>
                <p className="question-sentense">{question.question}</p>
                {question.select.map((choice, i) => (
                  <div key={i}>
                    <label className="question-label" htmlFor={choice[1]}>
                      <input
                        name={question.name}
                        type="radio"
                        id={choice[1]}
                        onChange={
                          index === 0
                            ? handleRadioButton1
                            : index === 1
                            ? handleRadioButton2
                            : index === 2
                            ? handleRadioButton3
                            : index === 3
                            ? handleRadioButton4
                            : handleRadioButton5
                        }
                      />
                      {choice[0]}
                    </label>
                  </div>
                ))}
              </div>
            ))}
            <div className="question-submit">
              <div className="question-cautionSentense">
                <p>未回答の問題があります！</p>
              </div>
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

export default Question;
