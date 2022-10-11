import React from "react";
import Options from "../Options/Options";

const EachQuiz = ({ eachQuiz, idx }) => {
  const { question, id, options, correctAnswer } = eachQuiz;

  return (
    <div>
      <p className="text-lg text-center">
        Quiz {idx + 1} : {question.split("<p>")}
      </p>
      <p>Correct Answer : "{correctAnswer}"</p>
      {options.map((option, idx) => (
        <Options
          key={idx}
          option={option}
          correctAnswer={correctAnswer}
        ></Options>
      ))}
    </div>
  );
};

export default EachQuiz;
