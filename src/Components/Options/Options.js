import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Options = ({ option, correctAnswer, idx }) => {
  //   console.log(correctAnswer);

  const handleClick = (clickedOption) => {
    if (clickedOption.option === correctAnswer) {
      toast("Wow Good Job!!!");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Good Job",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      toast("Wrong Answer!");
      Swal.fire({
        icon: "error",
        title: "Oops Wrong Answer!!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="border rounded-lg bg-slate-700 hover:bg-blue-600 shadow-2xl shadow-indigo-800 pt-5 pb-5 px-5">
      <div
        className="text-white text-xl "
        onClick={() => handleClick({ option })}
      >
        <input type="radio" name="option" id={option} value={option} />
        <label htmlFor={option} className="pl-3">
          {option}
        </label>
      </div>
    </div>
  );
};

export default Options;
