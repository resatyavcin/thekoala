import Image from "next/image";
import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center relative w-screen">
      <Image
        width={600}
        height={600}
        src={"/images/Working from anywhere-rafiki.svg"}
        alt="ed"
      />
      <h2 className="text-2xl font-extrabold text-amber-700 absolute bottom-8 italic">
        "Zaman oldukça geliştiriyoruz..."
      </h2>
    </div>
  );
};

export default ComingSoon;
