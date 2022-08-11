import React from "react";
import HomeBtn from "../HomeBtn";
import Pets from "../PetsPage";
import StepBackButton from "../StepBackButton";

const Cats = () => {
  return (
    <>
      <StepBackButton />
      <h3> Объявления по пристройству кошек:</h3>
      <Pets kind="cat" />
      <HomeBtn />
    </>
  );
};

export default Cats;
