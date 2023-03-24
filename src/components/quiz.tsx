import React, { useState } from 'react';
import Question from '../components/question/App';
import Answer from '../components/answer/App';

const Quiz = () => {

    return (
      <div>
        <Question />
        <Answer />
      </div>
    );
}

export default Quiz;
