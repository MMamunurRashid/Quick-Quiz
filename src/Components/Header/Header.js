import React from "react";

const Header = () => {
  return (
    <div className="md:flex lg:flex md:w-11/12 lg:w-9/12 w-11/12  m-auto mt-20 mb-20">
      <div className="w-full">
        <img
          className=" md:rounded-l-lg rounded-lg m-auto"
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/e7/86/9f/e7869f19-080a-0371-0625-5e8415205c6b/source/512x512bb.jpg"
          alt=""
        />
      </div>
      <div className="sm:ml-8 text-center">
        <h1 className="lg:text-5xl md:text-3xl text-2xl mb-10">
          Welcome to Quick Quiz
        </h1>
        <h3 className="lg:text-3xl md:text-2xl text-xl mb-5">
          Get Ready For Quiz?
        </h3>
        <p className="text-lg">
          This the platform where you can attend for quiz to check your
          understanding of knowledge about Web development.
        </p>
        <p className="text-lg">
          Here so many quizzes about JavScript, React, CSS, and GitHub
        </p>
        <p className="text-xl mt-5">
          So <strong>Let's start </strong> the Quick Quiz
        </p>
      </div>
    </div>
  );
};

export default Header;
