import { NavLink, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import style from "./Layout.module.css";
import { routes } from "../../routes/routes";
import RegistrationModal from "../RegistrationModal";
import { Content, Footer } from "antd/lib/layout/layout";
import { auth } from "../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, Spin } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import Preloader from "../Preloader";

const Layout = () => {
  const [user, loading, error] = useAuthState(auth);

  const displayRoutes = () => {
    return routes.map((e) => <Route key={"route"} path={e.path} element={e.element} />);
  };

  return (
    <>
      {error && <strong>Ошибка: {error}</strong>}
      {loading && <Preloader />}
      {!loading && (
        <>
          <header>
            <Menu key={"menu"} mode="horizontal">
              <Menu.Item key={"main"}>
                <NavLink to="/">Главная страница</NavLink>
              </Menu.Item>
              <Menu.Item key={"allPets"}>
                <NavLink to="/pets">Все питомцы</NavLink>
              </Menu.Item>
              {/* <Menu.SubMenu key={"pets"} title="Питомцы">
                <Menu.Item key={"cats"}>
                  <NavLink to="cats">Кошки</NavLink>
                </Menu.Item>
                <Menu.Item key={"dogs"}>
                  <NavLink to="dogs">Собаки</NavLink>
                </Menu.Item>
                <Menu.Item key={"otherPets"}>
                  <NavLink to="other-pets">Другие животные</NavLink>
                </Menu.Item>
              </Menu.SubMenu> */}
              <Menu.Item key={"howToCare"}>
                <NavLink to="how-to-care">Как ухаживать</NavLink>
              </Menu.Item>
              <Menu.Item key={"hospitals"}>
                <NavLink to="hospitals">Ветклиники</NavLink>
              </Menu.Item>
              {user != undefined && (
                <div className={style.submenu}>
                  <strong> {user.email} </strong>
                  <Menu.SubMenu key={"usersFeatures"} icon={<UserOutlined />}>
                    <Menu.Item key={"petForm"}>
                      <NavLink to="create-item">Добавить объявление</NavLink>
                    </Menu.Item>
                    <Menu.Item key={"userProfile"}>
                      <NavLink to="user-profile">Личный кабинет</NavLink>
                    </Menu.Item>
                    <Menu.Item key={"logout"} danger icon={<LogoutOutlined />}>
                      <NavLink to="/logout">Выйти</NavLink>
                    </Menu.Item>
                  </Menu.SubMenu>
                </div>
              )}

              {user == undefined && (
                <Menu.Item key={"registration"} className={style.submenu}>
                  <RegistrationModal />
                </Menu.Item>
              )}
            </Menu>
          </header>
          <Content
            style={{
              padding: "20px 50px",
              minHeight: "100%",
              flexGrow: "1",
            }}
          >
            <Routes>{displayRoutes()}</Routes>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <a href="https://t.me/myaaaau">Нажми сюда, если у тебя возникнут вопросы</a>
            <span> © 2022</span>
          </Footer>
        </>
      )}
    </>
  );
};

export default Layout;
