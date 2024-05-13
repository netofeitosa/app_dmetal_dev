import React from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { UserOutlined, UserAddOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import "./styles.css";

import { motion } from "framer-motion";

const User = () => {
  const auth = useAuth();
  return (
    <motion.div
      className="container-user"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.1 }}
    >
      <div>
        <Avatar size={75} icon={<UserAddOutlined />} />
      </div>
      <div className="container-user-data">
        <div className="container-user-data-span">
          <span>Nome</span>
          <span>{auth.nome}</span>
        </div>
        <div className="container-user-data-span">
          <span>Usuário</span>
          <span>{auth.login}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default User;
