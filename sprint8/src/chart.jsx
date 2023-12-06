import React from "react";
import { useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


function Chart() {

  const array2Data = useSelector((state) => state.data.array2);

  return (
    <div className="flex justify-center -mb-10 mt-5 mx-0">
    <BarChart
      width={500}
      height={300}
      data={array2Data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="city" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="cityKm2" fill="#8884d8" />
      <Bar dataKey="treeCoverKm" fill="#82ca9d" />
      <Bar dataKey="treePercentage" fill="#ffcc00" />
    </BarChart>
    </div>
  );
}

export default Chart;