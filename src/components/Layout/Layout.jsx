import { NavLink, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import style from "./Layout.module.css";
import { routes } from "../../routes/routes";
import RegistrationModal from "../Registration";
import { Content, Footer } from "antd/lib/layout/layout";
import { auth } from "../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";

const Layout = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(true);

  const [user, loading, error] = useAuthState(auth);

  const displayRoutes = () => {
    return routes.map((e) => <Route path={e.path} element={e.element} />);
  };

  return (
    <>
      <header>
        <Menu mode="horizontal">
          <Menu.Item>
            <NavLink to="/">Главная страница</NavLink>
          </Menu.Item>
          <SubMenu title="Питомцы">
            <Menu.Item>
              <NavLink to="cats">Кошки</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="dogs">Собаки</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="other-pets">Другие животные</NavLink>
            </Menu.Item>
          </SubMenu>

          <Menu.Item>
            <NavLink to="how-to-care">Как ухаживать</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="hospitals">Ветклиники</NavLink>
          </Menu.Item>

          {user != undefined && (
            <Menu.SubMenu icon={<UserOutlined />} className={style.submenu}>
              <Menu.Item>
                <NavLink to="create-item">Добавить объявление</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="user-profile">Личный кабинет</NavLink>
              </Menu.Item>
              <Menu.Item danger icon={<LogoutOutlined />}>
                <NavLink to="/logout">
                  Выйти
                </NavLink>
              </Menu.Item>
            </Menu.SubMenu>
          )}

          {user == undefined && (
            <Menu.Item className={style.submenu}>
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
