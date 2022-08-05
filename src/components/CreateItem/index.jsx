import React from "react";
import Petform from "../PetForm";

const CreateItem = () => {
  const pet = { moreinfo: "", };
  return (
    <>
      <h3>Новое объявление</h3>
      <Petform data={pet} />
    </>
  );
};

export default CreateItem;
