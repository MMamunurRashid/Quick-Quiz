import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import EachQuiz from "../EachQuiz/EachQuiz";

const Quiz = () => {
  const { data } = useLoaderData();
  const questions = data.questions;

  return (
    <div className="lg:w-9/12 m-auto pb-20">
      <ToastContainer></ToastContainer>
      <h1 className="text-4xl text-center mt-8 font-mono font-semibold">
        Quiz of {data.name}
      </h1>
      {questions.map((eachQuiz, idx) => (
        <EachQuiz key={eachQuiz.id} eachQuiz={eachQuiz} idx={idx}></EachQuiz>
      ))}
    </div>
  );
};

export default Quiz;
