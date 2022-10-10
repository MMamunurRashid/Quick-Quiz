import React from "react";
import { useLoaderData } from "react-router-dom";
import EachQuiz from "../EachQuiz/EachQuiz";

const Quiz = () => {
  const { data } = useLoaderData();
  const questions = data.questions;

  return (
    <div>
      {questions.map((eachQuiz) => (
        <EachQuiz key={eachQuiz.id} eachQuiz={eachQuiz}></EachQuiz>
      ))}
    </div>
  );
};

export default Quiz;
