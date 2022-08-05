import React from 'react';
import Pets from '../Pets';

const Cats = () => {

  return (
    <>
      <h3>Объявления по пристройству кошек:</h3>
      <Pets kind="cat" />
    </>
  );
};

export default Cats;