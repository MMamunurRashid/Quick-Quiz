import React from "react";

const Quizzes = ({ quiz }) => {
  console.log(quiz);
  return (
    <div className="m-10 bg-slate-400">
      <img className="w-1/5" src={quiz.logo} alt="" />

      <h1 className="text-2xl">{quiz.name}</h1>
      <h2>No of Quiz : {quiz.total}</h2>
      <button className=" mt-5 mb-2 border-0 bg-indigo-600 hover:bg-indigo-300 active:bg-red-500 text-white font-semibold rounded-xl px-12 py-1">
        Start Quiz
      </button>
    </div>
  );
};

export default Quizzes;
