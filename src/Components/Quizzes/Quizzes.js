import React from "react";

import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const Quizzes = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  console.log(name);
  return (
    <div className="m-10 bg-slate-400">
      <img className="w-1/5" src={logo} alt="" />

      <h1 className="text-2xl">{name}</h1>
      <h2>No of Quiz : {total}</h2>

      <Link to={`/quiz/${id}`}>
        <small className=" mt-5 mb-2 border-0 bg-indigo-600 hover:bg-indigo-300 active:bg-red-500 text-white font-semibold rounded-xl px-12 py-1">
          Start Quiz
        </small>
      </Link>
    </div>
  );
};

export default Quizzes;
