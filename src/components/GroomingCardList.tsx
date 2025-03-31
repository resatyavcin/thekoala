import Image from "next/image";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const GroomingCardList = () => {
  const cards = [
    { carNo: "0.5", value: 0.5, cardId: "1" },
    { carNo: "1", value: 1, cardId: "2" },
    { carNo: "2", value: 2, cardId: "3" },
    { carNo: "3", value: 3, cardId: "4" },
    { carNo: "5", value: 5, cardId: "5" },
    { carNo: "8", value: 8, cardId: "6" },
    { carNo: "13", value: 13, cardId: "7" },
    { carNo: "21", value: 21, cardId: "8" },
    { carNo: "?", value: 0, cardId: "9" },
  ];
  const [enabled, setEnabled] = useState<string>("8");

  return (
    <div className="flex gap-2 mt-3">
      {cards.map((item, i) => {
        return (
          <ReactCardFlip
            isFlipped={enabled === item.cardId}
            flipDirection="horizontal"
            key={i}
          >
            <button
              className="relative w-24 h-36 bg-white border rounded-lg shadow-lg flex items-center justify-center text-4xl font-bold"
              onClick={() => setEnabled(item.cardId)}
            >
              <span> {item.carNo}</span>
              <span className="absolute top-2 left-2 text-sm rotate-180">
                {item.carNo}
              </span>

              <span className="absolute bottom-2 right-2 text-sm">
                {item.carNo}
              </span>
            </button>
            <div className="relative w-24 h-36 bg-white border rounded-lg shadow-lg flex items-center justify-center text-4xl font-bold">
              <Image
                width={40}
                height={40}
                src={"/icons/joker-hat.png"}
                loading={"eager"}
                priority
                alt="working"
              />
            </div>
          </ReactCardFlip>
        );
      })}
    </div>
  );
};

export default GroomingCardList;
