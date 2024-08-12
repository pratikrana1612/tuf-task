import Button from "../Components/Button/Button";
import Card from "../Components/Card/Card";
import { useState } from "react";
import { fetchData } from "../Util/fetcher";
import { useLoaderData } from "react-router-dom";

export default function Learn() {
  const [queNumber, changeQueNumber] = useState(0);
  const qaArray = useLoaderData();
  const nextClickHandler = () => {
    changeQueNumber((prevQueNumber) => (prevQueNumber + 1) % qaArray.length);
  };

  const prevClickHandler = () => {
    changeQueNumber(
      (prevQueNumber) => (prevQueNumber - 1 + qaArray.length) % qaArray.length
    );
  };

  return (
    <>
      <div className="h-lvh flex flex-col justify-center items-center">
        {qaArray.length > 0 ? (
          <>
            <Card
              key={qaArray[queNumber].answer}
              question={qaArray[queNumber].question}
              answer={qaArray[queNumber].answer}
            ></Card>
            <div className="flex justify-between items-center mt-3 w-80">
              <Button onClick={prevClickHandler}>Prev</Button>
              <Button onClick={nextClickHandler}>Next</Button>
            </div>
          </>
        ) : (
          <p className="p-4 text-lg text-black font-bold text-center">
            No Question Found
          </p>
        )}
      </div>
    </>
  );
}
export function loader() {
  return fetchData(`${import.meta.env.VITE_API_URL}/api/learn`);
}
