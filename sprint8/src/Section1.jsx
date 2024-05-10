import React from "react";
import { useTranslation } from "react-i18next";
import heroimage from "./assets/tree-faces.jpeg"

function Section1() {
  const { i18n, t } = useTranslation();

  //FUNCTIONALITY: FUNCTION RECIEVES A 2 LOW CASE LETTER STRING
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="flex flex-col sm:h-full sm:px-30 lg:px-32">
        <div id="Title" className="mt-10 items-center h-1/5">
          <div className="flex px-10 mb-10 justify-end">
            <button className="border border-green-500 rounded-lg px-1 mr-3" onClick={() => changeLanguage("en")}>English</button>
            <button className="border border-green-500 rounded-lg px-1" onClick={() => changeLanguage("es")}>Español</button>
          </div>
          <h1 className="text-5xl px-10">✾</h1>
          <h1 className="text-5xl p-10 sm:text-6xl">{t("section1-heading")}</h1>
          <h2 className="text-xl mb-5 px-10 md:text-2xl">
            {t("section1-sub-heading")}
          </h2>
        </div>

        <div className="sm:flex sm:flex-row-reverse">
          <div className="flex flex-col h-2/5 m-0 sm:my-0 sm:basis-1/2 ">
            <img
              src={heroimage}
              alt="green world ilustration"
              className="m-0"
            />
          </div>

          <div
            id="section1-text-heading"
            className="my-0 px-10 h-2/5 sm:min-h-56 sm:basis-1/2 sm:pt-5"
          >
            <h2 className="text-2xl mb-5">
            {t("section1-text-heading")}
            </h2>
            <p id="section1-text-paragraph" className="text-xl my-10 pr-2">
            {t("section1-text-paragraph")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
