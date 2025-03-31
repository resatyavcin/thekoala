"use client";

import Image from "next/image";
import React from "react";

import useTranslation from "@/hooks/useTranslation";

const ComingSoon = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center relative w-screen">
      <Image
        width={600}
        height={600}
        src={"/images/Working from anywhere-rafiki.svg"}
        loading={"eager"}
        priority
        alt="working"
      />
      <h2 className="text-2xl font-extrabold text-amber-700 absolute bottom-8 italic">
        {t.DEVELOPING_DESCRIPTION}
      </h2>
    </div>
  );
};

export default ComingSoon;
