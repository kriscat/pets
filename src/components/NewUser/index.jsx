import { Button, Form, Input, Checkbox  } from "antd";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase";
import { Spin } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import Registration from "../Registration";
import { CheckCircleOutlined } from "@ant-design/icons";

const createUser = (values) => {
  console.log("Успешно:", values);
  signInWithEmailAndPassword(auth, values.login, values.pass);
};

const onFinishFailed = (errorInfo) => {
  console.log("Ошибка:", errorInfo);
};

const SignIn = ({closeModal}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  const onFinish = (values) => {
    createUser(values);
    closeModal();
  };
 
  if (loading) {
    return <Spin />;
  }
  if (user) {
   return (
     <div style={{ textAlign: "center" }}>
       <CheckCircleOutlined style={{ color: "green", fontSize: "55px" }} />
       <p>
         Добро пожаловать, <b>{user.user.email} </b>!
       </p>
     </div>
   );
 }
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      // wrapperCol={{
      //   span: 12,
      // }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"
    >
      {error && <p style={{ color: "red" }}>Ошибка: {error.message}</p>}
      <Form.Item
        label="Придумайте логин"
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
        label="Придумайте пароль"
        name="pass"
        rules={[
          {
            required: true,
            message: "Поле должно быть заполнено!",
          },
        ]}
      >
        <Input.Password type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
