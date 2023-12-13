import React from "react";
import { useSelector } from "react-redux";
import Echart from "../src/echart";
import { useTranslation } from "react-i18next";

function Section2() {
  const array1Data = useSelector((state) => state.data.array1);

  const { i18n, t } = useTranslation();

  const citiesList = array1Data.map((cityData, index) => (
    <span key={index}>
      {index > 0 && ','}
      {index === array1Data.length - 1 && array1Data.length > 1 && ' and'}
      {` ${cityData.city} (${cityData.percentage}%)`}
    </span>
  ));
  

  return (
    <>
      <div className="sm:h-screen flex flex-col flex-wrap sm:px-30 lg:px-32 sm:flex sm:flex-row items-center">
        <div className="p-10 text-2xl leading-relaxed h-1/2 sm:basis-1/2">
          <h1 className="md:text-4xl md:mb-5">{t("section2-title")}</h1>
          <h3>
            {" "}
            {citiesList}
          </h3>
        </div>

        <div className="flex h-1/2 justify-center items-start sm:basis-1/2">
          <div className="flex justify-center items-center h-64 w-64 md:h-96 md:w-96 max-w-full">
            <Echart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
