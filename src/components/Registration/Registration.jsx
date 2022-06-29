import React from 'react';
import style from "./Registration.module.css";

const Registration = ({ setActive }) => {
  const handleClick = () => setActive(false);
  return (<div className={style.registrationWrapper}>
    <div className={style.registration}>
      hello
      <button onClick={handleClick}>Закрыть</button>
</div>
  </div>)
}

export default Registration;