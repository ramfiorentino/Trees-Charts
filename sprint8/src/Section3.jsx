import React from "react";
import { useSelector } from 'react-redux';
import Chart from "../src/chart";
import { useTranslation } from "react-i18next";

function Section3() {
  const array1Data = useSelector((state) => state.data.array1);
  const array2Data = useSelector((state) => state.data.array2);

  const { i18n, t } = useTranslation();
  
  // FUNCTIONALITY
  const pDifference = (((array2Data[0].treePercentage - array1Data[0].percentage) / array2Data[0].treePercentage) * 100).toFixed(2);

  return (
    <>
      <div className="sm:h-screen flex flex-col p-10 sm:px-30 lg:px-32">

        <div className="flex justify-center items-center h-1/5 mb-16 p-10 md:p-0">
          <h2 className="text-4xl">{t("section3-text")}</h2>
        </div>

        <div className="flex h-2/5 justify-center items-center max-w-full">
          <Chart />
        </div>

        <div className="flex text-4xl text-center justify-center items-center p-10 md:py-0 h-2/5 md:h-72">
          <p>
          {t("section3-text1")} {array2Data[0].city} ({array2Data[0].treePercentage}%) and has a&nbsp;
            {pDifference}{t("section3-text2")} {array1Data[0].city} ({array1Data[0].percentage}%).
          </p>
        </div>
      </div>
    </>
  );
}

export default Section3;
