import React from "react";

import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const Quizzes = ({ quiz }) => {
  const { id, name, logo, total } = quiz;

  return (
    <div className="m-3 p-3 bg-slate-700 rounded-xl text-center">
      <img className="md:w-3/5 m-auto" src={logo} alt="" />

      <h1 className="text-2xl">{name}</h1>
      <h2 className="text-lg mb-5">No of Quiz : {total}</h2>

      <Link to={`/quiz/${id}`}>
        <small className="text-xl  border-0 bg-indigo-600 hover:bg-indigo-300 active:bg-red-500 text-white font-semibold rounded-xl px-12 py-1">
          Start Quiz
        </small>
      </Link>
    </div>
  );
};

export default Quizzes;
