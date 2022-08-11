import React, { useState } from "react";
import { Button, Modal } from "antd";
import SignIn from "../NewUserForm";
import { Tabs } from "antd";
import LoginForm from "../LoginFormPage";

const { TabPane } = Tabs;

const RegistrationModal = ({ setActive }) => {
  const handleClick = () => setActive(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Регистрация
      </Button>
      <Modal visible={isModalVisible} onOk={handleCancel} onCancel={handleCancel} footer={null}>
        <Tabs type="card">
          <TabPane tab="Войти в аккаунт" key="login">
            <LoginForm closeModal={handleCancel} />
          </TabPane>
          <TabPane tab="Зарегистрироваться" key="register">
            <SignIn closeModal={handleCancel} />
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

export default RegistrationModal;
