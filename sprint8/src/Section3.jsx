import React from "react";
import { useSelector } from 'react-redux';
import Chart from "../src/chart";

function Section3() {
  const array1Data = useSelector((state) => state.data.array1);
  const array2Data = useSelector((state) => state.data.array2);


  return (
    <>
      <div className="border-2 border-cyan-600 h-screen ">

        <div className="flex border-2 border-lime-500 justify-center items-center h-1/5">
          <h2 className="text-center">But lets see how we are doing in Spain</h2>
        </div>

        <div className="flex border-2 border-lime-500 h-2/5 justify-center items-center">
          <Chart />
        </div>

        <div className="flex border-2 border-lime-500 text-center items-center h-2/5">
          <p>
            The city with most tree coverage im spain is X and has a ?%
            DIFFERENCE with X(City with most coverage)
          </p>
        </div>
      </div>
    </>
  );
}

export default Section3;
