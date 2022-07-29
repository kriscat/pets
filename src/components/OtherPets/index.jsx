import React from "react";
import Pets from "../Pets";

const OtherPets = () => {
 return (
   <>
     <h3>Другие питомцы:</h3>
     <Pets kind="other" />
   </>
 );
};

export default OtherPets;
