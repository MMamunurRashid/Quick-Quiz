import React from "react";
import { Form, Radio } from "react-daisyui";

const Options = ({ option, correctAnswer }) => {
  //   console.log(correctAnswer);
  const handleClick = (clickedOption) => {
    console.log(clickedOption);
    if (clickedOption === correctAnswer) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }
  };
  return (
    <div>
      <Form className="text-white">
        <Radio onClick={() => handleClick({ option })} name="radio1 " />
        {option}
      </Form>
    </div>
  );
};

export default Options;
