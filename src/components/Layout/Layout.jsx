import { NavLink, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import style from "./Layout.module.css";
import { routes } from "../../routes/routes";
import Registration from "../Registration/Registration";
import { Content } from "antd/lib/layout/layout";

const setActive = ({ isActive }) => (isActive ? style.active + " " + style.link : style.link);
const Layout = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(true);

  const [isAuth, setIsAuth] = useState(false);

  const displayRoutes = () => {
    return routes.map((e) => <Route path={e.path} element={e.element} />);
  };

  return (
    <>
      <header className={style.header}>
        <div>
          <NavLink to="/" className={setActive}>
            Главная страница
          </NavLink>
          <NavLink to="cats" className={setActive}>
            Кошки
          </NavLink>
          <NavLink to="dogs" className={setActive}>
            Собаки
          </NavLink>
          <NavLink to="how-to-care" className={setActive}>
            Как ухаживать
          </NavLink>
          <NavLink to="hospitals" className={setActive}>
            Ветклиники
          </NavLink>
        </div>
        {isAuth && (
          <NavLink to="user-profile" className={style.registrationButton}>
            Личный кабинет
          </NavLink>
        )}
        {!isAuth && (
          <div className={style.registrationButton} onClick={handleClick}>
            Регистрация
          </div>
        )}

        {clicked && <Registration setActive={setClicked} />}
      </header>
      <Content
        style={{
          padding: "20px 50px",
        }}
      >
        <Routes>{displayRoutes()}</Routes>
      </Content>

      <footer className={style.footer}>
        <button className={style.button} onClick={() => window.location.assign("https://t.me/myaaaau")}>
          {" "}
          Нажми сюда, если у тебя возникнут вопросы
        </button>
        <p>© 2022</p>
      </footer>
    </>
  );
};

export default Layout;
