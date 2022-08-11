import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase";
import { Spin } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { CheckCircleOutlined } from "@ant-design/icons";
import Preloader from "../Preloader"

const createUser = (values) => {
  console.log("Успешно:", values);
  signInWithEmailAndPassword(auth, values.login, values.pass);
};

const onFinishFailed = (errorInfo) => {
  console.log("Ошибка:", errorInfo);
};

const SignIn = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  const onFinish = (values) => {
    createUser(values);
    closeModal();
  };

  if (loading) {
    return <Preloader/>;
    }
  if (user) {
    return (
      <Modal style={{ textAlign: "center" }}>
        <CheckCircleOutlined style={{ color: "green", fontSize: "55px" }} />
        <p>
          Добро пожаловать, <b>{user.user.email} </b>!
        </p>
      </Modal>
    );
  }
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"
    >
      {error && <p style={{ color: "red" }}>Ошибка: {error.message}</p>}
      <Form.Item
        label="Логин"
        name="login"
        rules={[
          {
            required: true,
            message: "Поле должно быть заполнено!",
          },
        ]}
      >
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="pass"
        rules={[
          {
            required: true,
            message: "Поле должно быть заполнено!",
          },
          {
            type: "string",
            min: 6,
            message: "В пароле должно быть не меньше 6 символов",
          },
        ]}
      >
        <Input.Password
          type="password"
          value={password}
          rules={[]}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 12,
        }}
        style={{ textAlign: "center" }}
      >
        <Button type="primary" onClick={() => createUserWithEmailAndPassword(email, password)}>
          Регистрация
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignIn;
