import React from "react";
import ilu1 from "../src/assets/ilu1.svg"
import { useTranslation } from "react-i18next";


function Section4() {

  const { i18n, t } = useTranslation();

  return (
    <>
      <div className="sm:h-full flex flex-col text-center">
        
      <div className="h-3/5 px-10 justify-center bg-cover bg-center relative sm:px-30 md:px-32 sm:py-44"
      style={{ backgroundImage: `url(${ilu1})` }} >
      <h2 className="text-4xl sm:text-5xl my-10 mx-10 sm:mx-20">{t("section4-text1")}</h2>

        <p className="text-2xl sm:text-3xl my-10">{t("section4-text2")}</p>
      </div>

</div>
    </>
  );
}

export default Section4;
