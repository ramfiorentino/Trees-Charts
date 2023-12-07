import React from "react";
import ilu1 from "../src/assets/ilu1.svg"

function Section4() {
  return (
    <>
      <div className="sm:h-screen flex flex-col">
        
      <div className="h-3/5 px-10 my-5 justify-center items-center">
        <h2 className="text-4xl">The importance of urban trees is recognised in the EU Biodiversity Strategy 2023,</h2>
        <p className="text-2xl">which requires that cities with over 20,000 inhabitants develop urban greening plans, including measures to create biodiverse and accessible urban green spaces, including parks, forests and tree-lined streets.</p>
      </div>

      <div className="flex flex-col bg-black h-2/5">
        <img src={ilu1} alt="SVG image"/>
        </div>

      </div>
    </>
  );
}

export default Section4;
