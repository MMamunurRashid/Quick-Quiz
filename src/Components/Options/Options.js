import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Options = ({ option, correctAnswer, idx }) => {
  //   console.log(correctAnswer);

  const handleClick = (clickedOption) => {
    if (clickedOption.option === correctAnswer) {
      toast(" Wow,Good Job", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Good Job",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      toast("Wrong Answer!!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
      <div className="text-white sm:text-xl text-lg">
        <input type="radio" name="option" id={option} value={option} />
        <label
          onClick={() => handleClick({ option })}
          htmlFor={option}
          className="pl-3 hover:cursor-pointer"
        >
          {option}
        </label>
      </div>
    </div>
  );
};

export default Options;
