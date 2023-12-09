import React from "react";
import ilu1 from "../src/assets/ilu1.svg"
import { useTranslation } from "react-i18next";


function Section4() {

  const { i18n, t } = useTranslation();

  return (
    <>
      <div className="sm:h-screen flex flex-col">
        
      <div className="h-3/5 px-10 my-5 justify-center items-center sm:px-30 md:px-32">
        <h2 className="text-4xl">{t("section4-text1")}</h2>
        <p className="text-2xl my-5">{t("section4-text2")}</p>
      </div>

      <div className="flex flex-col bg-black">
        <img src={ilu1} alt="SVG image"/>
        </div>

      </div>
    </>
  );
}

export default Section4;
