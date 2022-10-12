import React from "react";
import { useLoaderData } from "react-router-dom";

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const { data } = useLoaderData();

  console.log(data);

  return (
    <div className="bg-white ">
      <h1 className="text-center text-black text-4xl pt-20 pb-10 font-mono font-semibold">
        Line Chart for Total number of Quiz question
      </h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={500} height={500} data={data}>
          <Line type="monotone" dataKey="total" stroke="#82ca9d"></Line>

          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Legend></Legend>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
