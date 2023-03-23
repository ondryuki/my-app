import React, { useState } from 'react';
import Question from '../components/question/App';
import Answer from '../components/answer/App';

// console.log(React);
// const isCurrect = useState(true);

function Quiz() {
  return (
    <div>
      <Question />
      <Answer />
    </div>
  );
}
export default Quiz;
