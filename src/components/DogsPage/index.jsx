import React from "react";
import HomeBtn from "../HomeBtn";
import Pets from "../PetsPage";
import StepBackButton from "../StepBackButton";

const Dogs = () => {
  return (
    <>
      <StepBackButton />
      <h3>Объявления по пристройству собак:</h3>
      <Pets kind="dog" />
      <HomeBtn />
    </>
  );
};

export default Dogs;
