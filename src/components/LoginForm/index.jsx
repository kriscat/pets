import { Button, Checkbox, Form, Input, Spin } from "antd";
import { getAuth } from "firebase/auth";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { firebaseApp } from "../../Firebase";

const LoginForm = ({ closeModal }) => {
  const auth = getAuth(firebaseApp);
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const onFinish = (values) => {
    console.log("Success:", values);
    signInWithEmailAndPassword(values.username, values.password, values.remem);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (loading) {
    return <Spin />;
  }
  if (user) {
    closeModal();
  }
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      // wrapperCol={{
      //   span: 15,
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
        label="Ваш логин"
        name="username"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите логин!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Ваш пароль"
        name="password"
        rules={[
          {
            required: true,
            message: "Пожалуйста,введите пароль!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 8,
        }}
      >
        <Checkbox>Запомнить меня</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 8,
        }}
        style={{textAlign:"center"}}
      >
        <Button type="primary" htmlType="submit" >
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
