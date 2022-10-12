import React from "react";
import Options from "../Options/Options";
import { EyeIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
const EachQuiz = ({ eachQuiz, idx }) => {
  const { question, id, options, correctAnswer } = eachQuiz;

  return (
    <div className=" bg-slate-500 border sm:m-10 m-3 pt-10 pb-10 rounded-2xl shadow-2xl shadow-indigo-800 border-yellow-100">
      <div className="md:flex md:w-4/5 m-auto justify-between items-center">
        <p className="sm:text-3xl text-xl  text-center md:w-4/5 m-auto ">
          Quiz {idx + 1} : {question.slice(3, -4)}
        </p>
        <EyeIcon
          title="Show the correct answer"
          onClick={() => {
            Swal.fire({
              position: "center",
              icon: "question",
              title: `${correctAnswer}`,
              showConfirmButton: true,
            });
          }}
          className="h-6 w-6 m-auto mt-3"
        ></EyeIcon>
      </div>

      <div className="grid md:grid-cols-2 lg:w-4/5 w-11/12 shadow-2xl shadow-indigo-800 m-auto gap-3 pt-5">
        {options.map((option, idx) => (
          <Options
            key={idx}
            option={option}
            correctAnswer={correctAnswer}
          ></Options>
        ))}
      </div>
    </div>
  );
};

export default EachQuiz;
