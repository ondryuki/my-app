import React, { useState } from 'react';
import Question from '../components/question/App';
// import Answer from '../components/answer/App';

// console.log(React);
// const isCurrect = useState(true);

const Quiz = () => {

    return (
      <div>
        <Question
          // submitAnswer={handleAnswer}
        />
        {/* <Answer /> */}
      </div>
    );
}

export default Quiz;
