import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Quizzes from "../Quizzes/Quizzes";

const Home = () => {
  const { data } = useLoaderData();

  return (
    <div>
      <Header></Header>
      <div className="grid md:grid-cols-3 md:w-4/5 sm:w-11/12 m-auto ">
        {data.map((quiz) => (
          <Quizzes key={quiz.id} quiz={quiz}></Quizzes>
        ))}
      </div>
    </div>
  );
};

export default Home;
