import { NavLink, Route, Routes } from "react-router-dom";
import React from "react";
import style from "./Layout.module.css";
import { routes } from "../../routes/routes";
import RegistrationModal from "../Registration";
import { Content, Footer } from "antd/lib/layout/layout";
import { auth } from "../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";

  const displayRoutes = () => {
    return routes.map((e) => <Route key={e.path} path={e.path} element={e.element} />);
  };
const Layout = () => {
    const [user] = useAuthState(auth);

  return (
    <>
      <header>
        <Menu mode="horizontal">
          <Menu.Item key="main">
            <NavLink to="/">Главная страница</NavLink>
          </Menu.Item>
          <Menu.SubMenu title="Выбрать питомца" key={2}>
            <Menu.Item key="cats">
              <NavLink to="cats">Кошки</NavLink>
            </Menu.Item>
            <Menu.Item key="dogs">
              <NavLink to="dogs">Собаки</NavLink>
            </Menu.Item>
            <Menu.Item key="otherPets">
              <NavLink to="other-pets">Другие животные</NavLink>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.Item key="care">
            <NavLink to="how-to-care">Как ухаживать</NavLink>
          </Menu.Item>
          <Menu.Item key="hospitals">
            <NavLink to="hospitals">Ветклиники</NavLink>
          </Menu.Item>
          {user !== undefined && (
            <Menu.SubMenu icon={<UserOutlined />} className={style.submenu} key={8}>
              <Menu.Item key="createItem">
                <NavLink to="create-item">Добавить объявление</NavLink>
              </Menu.Item>
              <Menu.Item key="userProfile">
                <NavLink to="user-profile">Личный кабинет</NavLink>
              </Menu.Item>
              <Menu.Item
                key="logOut"
                danger
                icon={<LogoutOutlined />}
                onClick={() => {
                  signOut(auth);
                }}
              >
                Выйти
              </Menu.Item>
            </Menu.SubMenu>
          )}

          {user === undefined && (
            <Menu.Item className={style.submenu} key="registration">
              <RegistrationModal />
            </Menu.Item>
          )}
        </Menu>
      </header>
      <Content
        style={{
          padding: "20px 50px",
        }}
      >
        {/* {user && user.email} */}
        <Routes>{displayRoutes()}</Routes>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        <a href="https://t.me/myaaaau">Нажми сюда, если у тебя возникнут вопросы</a>
        <span> © 2022</span>
      </Footer>
    </>
  );
};

export default Layout;
