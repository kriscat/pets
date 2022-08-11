import React from "react";
import HomeBtn from "../HomeBtn";
import Pets from "../PetsPage";
import StepBackButton from "../StepBackButton";

const OtherPets = () => {
  return (
    <>
      <StepBackButton />
      <h3>Объявления по пристройству других питомцев:</h3>
      <Pets kind="other" />
      <HomeBtn />
    </>
  );
};

export default OtherPets;
