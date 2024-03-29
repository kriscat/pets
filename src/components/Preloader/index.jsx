import { Spin } from 'antd';
import React from 'react';
import style from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={style.loader}>
      <Spin size="large"/>
    </div>
  );
};

export default Preloader;