import React from "react";
import Options from "../Options/Options";
import { EyeIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
const EachQuiz = ({ eachQuiz, idx }) => {
  const { question, id, options, correctAnswer } = eachQuiz;

  let ques = "";
  for (let i = 3; i < question.length - 4; i++) {
    ques = ques + question[i];
  }

  return (
    <div className=" bg-slate-500 border m-10 pt-10 pb-10 rounded-2xl shadow-2xl shadow-indigo-800 border-yellow-100">
      <div className="flex md:w-4/5 m-auto justify-between items-center">
        <p className="text-3xl  text-center md:w-4/5 m-auto ">
          Quiz {idx + 1} : {ques}
        </p>
        <EyeIcon
          onClick={() => {
            Swal.fire({
              position: "center",
              icon: "question",
              title: `${correctAnswer}`,
              showConfirmButton: true,
            });
          }}
          className="h-6 w-6"
        ></EyeIcon>
      </div>

      <div className="grid md:grid-cols-2 w-4/5 shadow-2xl shadow-indigo-800 m-auto gap-3 pt-5">
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
