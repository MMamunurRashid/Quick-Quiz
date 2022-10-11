import React from "react";
import Options from "../Options/Options";

const EachQuiz = ({ eachQuiz, idx }) => {
  const { question, id, options, correctAnswer } = eachQuiz;

  let ques = "";
  for (let i = 3; i < question.length - 4; i++) {
    ques = ques + question[i];
  }

  return (
    <div className=" bg-slate-500 border m-10 pt-10 pb-10 rounded-2xl shadow-2xl shadow-indigo-800 border-yellow-100">
      <p className="text-lg text-center">
        Quiz {idx + 1} : {ques}
      </p>

      <div className="grid md:grid-cols-2 w-4/5 shadow-2xl shadow-indigo-800 m-auto gap-3">
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
