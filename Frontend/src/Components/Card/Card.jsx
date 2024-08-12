import { useState } from "react";

export default function Card({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardClickHandler = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className="group h-96 w-80 [perspective:1000px]"
      onClick={cardClickHandler}
    >
      <div
        className={`relative h-full w-full border-blue-500 border-2 rounded-2xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute inset-0 [color:#0056d2] font-sans font-semibold flex justify-center items-center">
          <h1>{question}</h1>
        </div>

        <div className="absolute inset-0 h-full w-full rounded-xl px-12 [background-color:white] text-center [color:#0056d2] [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">{answer}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
