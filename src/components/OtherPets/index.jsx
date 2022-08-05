import React from "react";
import Pets from "../Pets";

const OtherPets = () => {
 return (
   <>
     <h3>Объявления по пристройству других питомцев:</h3>
     <Pets kind="other" />
   </>
 );
};

export default OtherPets;
