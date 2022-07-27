import React from 'react';
import style from "./MainPage.module.css";
import image from "../../images/10668.jpg";
import RegistrationModal from '../Registration';
import { auth } from "../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from 'react';
import { useEffect } from 'react';
import UserProfile from '../UserProfile';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

const MainPage = () => {
  const [user, loading, error] = useAuthState(auth);
   
  return (
    <div className={style.mainpage}>
      <div>
        <img className={style.image} src={image} alt="Logo not found" />
      </div>
      <div className={style.info}>
        <p className={style.mainname}>Название проекта</p>
        <p className={style.maintext}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed a labore aspernatur voluptas quae
          asperiores quasi hic optio dolor odit? Ipsa id a et ullam quis soluta sed nam quisquam.
        </p>

        {user == undefined && <RegistrationModal />}
        {user != undefined && (
          <Button type="primary">
            <NavLink to="/user-profile">Мой личный кабинет</NavLink>
          </Button>
        )}
      </div>
    </div>
  );
}

export default MainPage;