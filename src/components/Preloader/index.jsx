import { Spin } from 'antd';
import React from 'react';
import PreloaderImage from "../../images/load.gif";
import style from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={style.loader}>
      <Spin size="large"/>
      {/* <img className={style.image} src={PreloaderImage} alt="Идет загрузка..." /> */}
    </div>
  );
};

export default Preloader;