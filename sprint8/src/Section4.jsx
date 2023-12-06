import React from "react";
import ilu1 from "../src/assets/ilu1.svg"

function Section4() {
  return (
    <>
      <div className="border-2 border-cyan-600 h-screen ">
        
      <div className="flex border-2 border-lime-300 h-3/5 justify-center items-center">
        <h2>Europe is workin on increasing tree coverage</h2>
      </div>

      <div className="flex flex-col bg-black border-2 border-yellow-500 h-2/5">
        <img src={ilu1} alt="SVG image"/>
        </div>

      </div>
    </>
  );
}

export default Section4;
