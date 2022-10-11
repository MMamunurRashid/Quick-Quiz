import React from "react";
import { useLoaderData } from "react-router-dom";
import EachQuiz from "../EachQuiz/EachQuiz";

const Quiz = () => {
  const { data } = useLoaderData();
  const questions = data.questions;

  return (
    <div>
      <h1 className="text-2xl text-center">Quiz of {data.name}</h1>
      {questions.map((eachQuiz, idx) => (
        <EachQuiz key={eachQuiz.id} eachQuiz={eachQuiz} idx={idx}></EachQuiz>
      ))}
    </div>
  );
};

export default Quiz;
