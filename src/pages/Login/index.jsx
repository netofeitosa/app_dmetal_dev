import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";
import { BiLogIn, BiLogInCircle } from "react-icons/bi";
import { IoFingerPrint } from "react-icons/io5";

import "./styles.css";
import logoPreta from "../../assets/logoPreta.svg";

import { motion } from "framer-motion";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [button, setButton] = useState(false);

  useEffect(() => {
    if (auth.token) {
      navigate("/home");
    }
  }, [auth.token]);

  async function onFinish(user, password) {
    try {
      setButton(true);
      await auth.authenticate(user, password);
      navigate("/home");
    } catch (error) {
      setButton(false);
      message.error("Usuário ou senha inválidos!");
    }
  }

  return (
    <motion.div
      className="container-login"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.2 }}
    >
      <div className="container-login-logo">
        <img src={logoPreta} alt="Logo" width="160" />
      </div>
      <div className="container-login-form-text">
        <div className="container-login-form-text-text">
          <span>Login</span>
          <span>Entre com as suas credenciais</span>
        </div>
        <div className="container-login-form-text-icone">
          <IoFingerPrint size={32} />
        </div>
      </div>
      <div className="container-login-form">
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Form.Item
            name="user"
            rules={[{ required: true, message: "Informe o seu usuário" }]}
            style={{ width: "80vw" }}
          >
            <Input
              size="large"
              style={{ height: "45px" }}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Usuário"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Informe a sua senha" }]}
          >
            <Input.Password
              size="large"
              style={{ height: "45px" }}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Senha"
            />
          </Form.Item>
          <Form.Item>
            {button ? (
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{
                  marginTop: "5px",
                  width: "100%",
                  height: "50px",
                  backgroundColor: "var(--primary)",
                }}
                loading
              >
                <span style={{ fontSize: "18px" }}>
                  <strong>Login</strong>
                </span>
              </Button>
            ) : (
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{
                  marginTop: "5px",
                  width: "100%",
                  height: "50px",
                  backgroundColor: "var(--primary)",
                }}
              >
                <span style={{ fontSize: "18px" }}>
                  <strong>Login</strong>
                </span>
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </motion.div>
  );
};

export default Login;