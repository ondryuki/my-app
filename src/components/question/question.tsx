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
    const answerArray1 = props.quizAnswer1.map(answer => ({
      ...answer,
      name: e.target.name,
      selectedAnswer: e.target.id,
      isCorrect: e.target.id === props.fiveQuestions[0].answer
    }));
    props.setAnswer1(answerArray1);
    console.log(answerArray1);
  };

  const handleRadioButton2 = (e: ChangeEvent<HTMLInputElement>) => {
    const answerArray2 = props.quizAnswer2.map(answer => ({
      ...answer,
      name: e.target.name,
      selectedAnswer: e.target.id,
      isCorrect: e.target.id === props.fiveQuestions[1].answer
    }));
    props.setAnswer2(answerArray2);
    console.log(answerArray2);
  };

  const handleRadioButton3 = (e: ChangeEvent<HTMLInputElement>) => {
    const answerArray3 = props.quizAnswer3.map(answer => ({
      ...answer,
      name: e.target.name,
      selectedAnswer: e.target.id,
      isCorrect: e.target.id === props.fiveQuestions[2].answer
    }));
    props.setAnswer3(answerArray3);
    console.log(answerArray3);
  };

  const handleRadioButton4 = (e: ChangeEvent<HTMLInputElement>) => {
    const answerArray4 = props.quizAnswer4.map(answer => ({
      ...answer,
      name: e.target.name,
      selectedAnswer: e.target.id,
      isCorrect: e.target.id === props.fiveQuestions[3].answer
    }));
    props.setAnswer4(answerArray4);
    console.log(answerArray4);
  };

  const handleRadioButton5 = (e: ChangeEvent<HTMLInputElement>) => {
    const answerArray5 = props.quizAnswer5.map(answer => ({
      ...answer,
      name: e.target.name,
      selectedAnswer: e.target.id,
      isCorrect: e.target.id === props.fiveQuestions[4].answer
    }));
    props.setAnswer5(answerArray5);
    console.log(answerArray5);
  };

  // ============== 変数 ==============
  const questionContents = props.fiveQuestions;

  // ============== html ==============
  return (
    <main className="question-main">
      <div className="question-questions">
        <form action="">
          <div className="question-questions">
            <h2 className="question-number">Q1</h2>
            <p className="question-sentense">{questionContents[0].question}</p>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[0].select[0][1]}
              >
                <input
                  name={questionContents[0].name}
                  type="radio"
                  id={questionContents[0].select[0][1]}
                  onChange={handleRadioButton1}
                  required
                />
                {questionContents[0].select[0][0]}
              </label>
            </div>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[0].select[1][1]}
              >
                <input
                  name={questionContents[0].name}
                  type="radio"
                  id={questionContents[0].select[1][1]}
                  onChange={handleRadioButton1}
                  required
                />
                {questionContents[0].select[1][0]}
              </label>
            </div>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[0].select[2][1]}
              >
                <input
                  name={questionContents[0].name}
                  type="radio"
                  id={questionContents[0].select[2][1]}
                  onChange={handleRadioButton1}
                  required
                />
                {questionContents[0].select[2][0]}
              </label>
            </div>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[0].select[3][1]}
              >
                <input
                  name={questionContents[0].name}
                  type="radio"
                  id={questionContents[0].select[3][1]}
                  onChange={handleRadioButton1}
                  required
                />
                {questionContents[0].select[3][0]}
              </label>
            </div>
          </div>
          <div className="question-questions">
            <h2 className="question-number">Q2</h2>
            <p className="question-sentense">{questionContents[1].question}</p>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[1].select[0][1]}
              >
                <input
                  name={questionContents[1].name}
                  type="radio"
                  id={questionContents[1].select[0][1]}
                  onChange={handleRadioButton2}
                  required
                />
                {questionContents[1].select[0][0]}
              </label>
            </div>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[1].select[1][1]}
              >
                <input
                  name={questionContents[1].name}
                  type="radio"
                  id={questionContents[1].select[1][1]}
                  onChange={handleRadioButton2}
                  required
                />
                {questionContents[1].select[1][0]}
              </label>
            </div>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[1].select[2][1]}
              >
                <input
                  name={questionContents[1].name}
                  type="radio"
                  id={questionContents[1].select[2][1]}
                  onChange={handleRadioButton2}
                  required
                />
                {questionContents[1].select[2][0]}
              </label>
            </div>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[1].select[3][1]}
              >
                <input
                  name={questionContents[1].name}
                  type="radio"
                  id={questionContents[1].select[3][1]}
                  onChange={handleRadioButton2}
                  required
                />
                {questionContents[1].select[3][0]}
              </label>
            </div>
          </div>
          <div className="question-questions">
            <h2 className="question-number">Q3</h2>
            <p className="question-sentense">{questionContents[2].question}</p>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[2].select[0][1]}
              >
                <input
                  name={questionContents[2].name}
                  type="radio"
                  id={questionContents[2].select[0][1]}
                  onChange={handleRadioButton3}
                  required
                />
                {questionContents[2].select[0][0]}
              </label>
            </div>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[2].select[1][1]}
              >
                <input
                  name={questionContents[2].name}
                  type="radio"
                  id={questionContents[2].select[1][1]}
                  onChange={handleRadioButton3}
                  required
                />
                {questionContents[2].select[1][0]}
              </label>
            </div>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[2].select[2][1]}
              >
                <input
                  name={questionContents[2].name}
                  type="radio"
                  id={questionContents[2].select[2][1]}
                  onChange={handleRadioButton3}
                  required
                />
                {questionContents[2].select[2][0]}
              </label>
            </div>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[2].select[3][1]}
              >
                <input
                  name={questionContents[2].name}
                  type="radio"
                  id={questionContents[2].select[3][1]}
                  onChange={handleRadioButton3}
                  required
                />
                {questionContents[2].select[3][0]}
              </label>
            </div>
          </div>
          <div className="question-questions">
            <h2 className="question-number">Q4</h2>
            <p className="question-sentense">{questionContents[3].question}</p>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[3].select[0][1]}
              >
                <input
                  name={questionContents[3].name}
                  type="radio"
                  id={questionContents[3].select[0][1]}
                  onChange={handleRadioButton4}
                  required
                />
                {questionContents[3].select[0][0]}
              </label>
            </div>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[3].select[1][1]}
              >
                <input
                  name={questionContents[3].name}
                  type="radio"
                  id={questionContents[3].select[1][1]}
                  onChange={handleRadioButton4}
                  required
                />
                {questionContents[3].select[1][0]}
              </label>
            </div>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[3].select[2][1]}
              >
                <input
                  name={questionContents[3].name}
                  type="radio"
                  id={questionContents[3].select[2][1]}
                  onChange={handleRadioButton4}
                  required
                />
                {questionContents[3].select[2][0]}
              </label>
            </div>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[3].select[3][1]}
              >
                <input
                  name={questionContents[3].name}
                  type="radio"
                  id={questionContents[3].select[3][1]}
                  onChange={handleRadioButton4}
                  required
                />
                {questionContents[3].select[3][0]}
              </label>
            </div>
          </div>
          <div className="question-questions">
            <h2 className="question-number">Q5</h2>
            <p className="question-sentense">{questionContents[4].question}</p>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[4].select[0][1]}
              >
                <input
                  name={questionContents[4].name}
                  type="radio"
                  id={questionContents[4].select[0][1]}
                  onChange={handleRadioButton5}
                  required
                />
                {questionContents[4].select[0][0]}
              </label>
            </div>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[4].select[1][1]}
              >
                <input
                  name={questionContents[4].name}
                  type="radio"
                  id={questionContents[4].select[1][1]}
                  onChange={handleRadioButton5}
                  required
                />
                {questionContents[4].select[1][0]}
              </label>
            </div>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[4].select[2][1]}
              >
                <input
                  name={questionContents[4].name}
                  type="radio"
                  id={questionContents[4].select[2][1]}
                  onChange={handleRadioButton5}
                  required
                />
                {questionContents[4].select[2][0]}
              </label>
            </div>
            <div>
              <label
                className="question-label"
                htmlFor={questionContents[4].select[3][1]}
              >
                <input
                  name={questionContents[4].name}
                  type="radio"
                  id={questionContents[4].select[3][1]}
                  onChange={handleRadioButton5}
                  required
                />
                {questionContents[4].select[3][0]}
              </label>
            </div>
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
