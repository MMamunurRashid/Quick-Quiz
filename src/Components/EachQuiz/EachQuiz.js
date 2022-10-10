import React from "react";

const EachQuiz = ({ eachQuiz }) => {
  const { question, id, options, cureectAnswer } = eachQuiz;
  return <div>{question}</div>;
};

export default EachQuiz;
