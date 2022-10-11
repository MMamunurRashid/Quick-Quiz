import React from "react";
import { Tooltip } from "react-daisyui";
import { Legend, Line, LineChart, XAxis, YAxis } from "recharts";

const StatisticsChart = ({ data }) => {
  const { name, total } = data;
  console.log(name);
  console.log(total);
  //   data.map((eachData) => console.log(eachData.name, eachData.total));
  //   console.log(data);
  return (
    <div className="text-center bg-white">
      <h2 className="text-3xl">Assignment and Quiz Marks Line Chart</h2>
      <div>
        <LineChart width={500} height={500} data={data.data}>
          <Line type="monotone" dataKey={total} stroke="#8884d8"></Line>
          <XAxis dataKey={name}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </LineChart>
        <Legend></Legend>
      </div>
    </div>
  );
};

export default StatisticsChart;
