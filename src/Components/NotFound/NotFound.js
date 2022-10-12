import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="sm:w-4/5 pt-10  m-auto">
      <div className=" w-full p-2">
        <img
          className="sm:rounded-3xl rounded-lg"
          src="https://unblast.com/wp-content/uploads/2018/06/404-Website-Page-Template-1600x1000.jpg"
          alt=""
        />
      </div>
      <h1 className="sm:text-5xl text-2xl font-serif pt-10  text-center">
        This route not found Status : 404
      </h1>
      <div className="text-center mt-5 pb-40">
        <Link to={`/home`}>
          <small className="text-xl  border-0 bg-indigo-600 hover:bg-indigo-300 text-white font-semibold rounded-xl px-12 py-1">
            Go To Home
          </small>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
