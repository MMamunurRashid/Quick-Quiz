import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Quizzes from "../Quizzes/Quizzes";

const Home = () => {
  const quizzesData = useLoaderData();
  const quizzes = quizzesData.data;
  return (
    <div>
      <Header></Header>
      <div className="grid md:grid-cols-3 w-4/5 m-auto ">
        {quizzes.map((quiz) => (
          <Quizzes key={quiz.id} quiz={quiz}></Quizzes>
        ))}
      </div>
    </div>
  );
};

export default Home;
