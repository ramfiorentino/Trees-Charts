import React from "react";
import { useSelector } from 'react-redux';
import Chart from "../src/chart";

function Section3() {
  const array1Data = useSelector((state) => state.data.array1);
  const array2Data = useSelector((state) => state.data.array2);
  const pDifference = ((array2Data[0].treePercentage - array1Data[0].percentage) / array2Data[0].treePercentage) * 100;

  return (
    <>
      <div className="sm:h-screen flex flex-col my-10">

        <div className="flex justify-center items-center h-1/5">
          <h2 className="text-4xl p-10">But let's see how we are doing in Spain</h2>
        </div>

        <div className="flex h-2/5 justify-center items-center max-w-full">
          <Chart />
        </div>

        <div className="flex text-4xl justify-center items-center p-10 h-2/5">
          <p>
            The city with the most tree coverage in Spain is {array2Data[0].city} ({array2Data[0].treePercentage}%) and has a&nbsp;
            {pDifference.toFixed(2)}% difference with {array1Data[0].city} ({array1Data[0].percentage}%).
          </p>
        </div>
      </div>
    </>
  );
}

export default Section3;
