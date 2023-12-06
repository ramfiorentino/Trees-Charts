import React from "react";
import { useSelector } from 'react-redux';
import Echart from "../src/echart";

function Section2() {
  const array1Data = useSelector((state) => state.data.array1);
  

  return (
    <>

      <div className="border-2 border-cyan-600 h-screen ">
        
      <div className="border-2 border-lime-500 text-center h-1/2" >
        <h3> The 5 cities with higher percentage of tree coverage are  
          {array1Data[0].city} ({array1Data[0].percentage}%),  
          {array1Data[1].city} ({array1Data[1].percentage}%),   
          {array1Data[2].city} ({array1Data[2].percentage}%),
          {array1Data[3].city} ({array1Data[3].percentage}%),
          {array1Data[4].city} ({array1Data[0].percentage}%)</h3>
      </div>

      <div className="flex border-2 border-lime-500 h-1/2 justify-center items-center" >
        <div className="flex justify-center items-center border-2 border-blue-500 m-10 h-64 w-64">
        <Echart />
        </div>
      </div>

      </div>
    </>
  );
}

export default Section2;
