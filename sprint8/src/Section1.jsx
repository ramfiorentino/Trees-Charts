import React from "react";
import ilu1 from "../src/assets/ilu1.svg"

function Section1() {
  return (
    <>
      <div className="border-2 border-cyan-600 h-screen ">
        <div id="Title" className="border-2 border-lime-500 text-center h-1/5">
          <h1 className="text-2xl">Urban tree cover in Europe</h1>
          <h2>Data from European Environment Agency</h2>
        </div>

        <div className="border-2 border-yellow-500 h-2/5">
        <img src={ilu1} alt="SVG image"/>
        </div>

        <div className="border-2 border-lime-500 text-center h-2/5">
          <p>
            Trees in urban areas have multiple benefits for human well being and
            for biodiversity as well as for carbon sequestration, climate change
            adaptation and flood protection. The below dashboard presents urban
            tree cover statistics for Functional Urban Areas in the EU27+UK and
            for the EEA 38+UK region, by countries. The dashboard will be
            updated every 3 years after the availability of the Copernicus Land
            Monitoring Service products Urban Atlas, Tree Cover Density and
            Street Tree Layer.
          </p>
        </div>
      </div>
    </>
  );
}

export default Section1;
