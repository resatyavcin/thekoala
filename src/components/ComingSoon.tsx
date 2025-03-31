"use client";

import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import en from "../constants/en.json";
import tr from "../constants/tr.json";

const translations: Record<string, { DEVELOPING_DESCRIPTION: string }> = {
  en,
  tr,
};

const ComingSoon = () => {
  const dispatch = useDispatch();
  const language = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  return (
    <div className="flex flex-col items-center justify-center relative w-screen">
      <Image
        width={600}
        height={600}
        src={"/images/Working from anywhere-rafiki.svg"}
        alt="ed"
      />
      <h2 className="text-2xl font-extrabold text-amber-700 absolute bottom-8 italic">
        {translations[language].DEVELOPING_DESCRIPTION}
      </h2>
    </div>
  );
};

export default ComingSoon;
