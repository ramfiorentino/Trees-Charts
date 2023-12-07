import React from "react";
import { useSelector } from 'react-redux';
import Echart from "../src/echart";

function Section2() {
  const array1Data = useSelector((state) => state.data.array1);
  

  return (
    <>

      <div className="sm:h-screen flex flex-col flex-wrap">
        
      <div className="p-10 text-2xl leading-relaxed h-1/2" >
        <h3> The 5 cities with higher percentage of tree coverage are  
          {array1Data[0].city} ({array1Data[0].percentage}%),  
          {array1Data[1].city} ({array1Data[1].percentage}%),   
          {array1Data[2].city} ({array1Data[2].percentage}%),
          {array1Data[3].city} ({array1Data[3].percentage}%),
          {array1Data[4].city} ({array1Data[0].percentage}%)</h3>
      </div>

      <div className="flex  h-1/2 justify-center items-center" >
        <div className="flex justify-center items-center m-10 h-64 w-64 max-w-full">
        <Echart />
        </div>
      </div>

      </div>
    </>
  );
}

export default Section2;
