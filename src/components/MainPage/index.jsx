import React from "react";
import style from "./MainPage.module.css";
import image from "../../images/10668.jpg";
import RegistrationModal from "../RegistrationModal";
import { auth } from "../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

const MainPage = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={style.mainpage}>
      <div>
        <img className={style.image} src={image} alt="Logo not found" />
      </div>
      <div className={style.info}>
        <p className={style.mainname}>"Pets to you"</p>
        <p className={style.maintext}>
          Первая платформа в Узбекистане для поиска и пристройства питомцев с простым и понятным интерфейсом.
          Здесь Вы можете опубликовать свое объявление или же найти свою родную душу.
        </p>
        <p className={style.maintext}>
          Часто люди заводят собаку или кошку, не до конца осознавая, что животное в доме – это определенные
          сложности и большая ответственность. Поэтому прежде чем заводить питомца,
          <NavLink to={"/how-to-care"}> оцените </NavLink> свои силы.
        </p>
        <p className={style.maintext}> Ваши будущие питомцы ждут вас!</p>

        {user ? (
          <Button type="primary">
            <NavLink to="/create-item">Добавить объявление</NavLink>
          </Button>
        ) : (
         <RegistrationModal/>
        )}
      </div>
    </div>
  );
};

export default MainPage;
