import React from "react";
import ilu1 from "../src/assets/ilu1.svg";

function Section1() {
  return (
    <>
      <div className="flex flex-col sm:h-screen">

        <div id="Title" className="my-10 items-center h-1/5">
          <h1 className="text-5xl px-10">✾</h1>
          <h1 className="text-5xl p-10">Urban tree cover in Europe</h1>
          <h2 className="text-xl pb-10 px-10">Data from European Environment Agency</h2>
        </div>

        <div className="flex flex-col h-2/5 bg-black m-0">
          <img src={ilu1} alt="SVG image" className="m-0"/>
        </div>


        

        <div id='text' className="my-10 px-10 h-2/5 ">
          <h2 className="text-2xl mb-5">
            Urban tree cover is the area in cities covered by tree crowns, if
            seen from avobe.
          </h2>
          <p className="text-xl mb-5 pr-2">
            Trees provide multiple benefits to the urban environment and the
            quality of life in cities. Amongst others, trees can help to adapt
            to the changing climate, by reducing air temperatures through
            shading and evapotraspiration, managing stormwater and reducing wind
            speeds. They can algo act as a carbon sink, thus contributing to
            climate change mitigation efforts. Further, trees benefit mental and
            physical health, e.g. by lowering stress levels, reducing the amount
            of toxic particles in the ambient air or providing pleasant
            environment for cycling and walking. Lastly, trees - especially old,
            native ones - provide habitats for wildlife and increase
            biodiversity in urban areas.
          </p>
        </div>
      </div>
    </>
  );
}

export default Section1;
