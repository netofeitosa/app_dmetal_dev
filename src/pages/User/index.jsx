import React, { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Avatar } from "antd";
import { motion } from "framer-motion";
import { TbUserEdit } from "react-icons/tb";

import "./styles.css";

const User = () => {
  const auth = useContext(AuthContext);

  return (
    <motion.div
      className="container-user"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.1 }}
    >
      <div>
        {!auth.user?.image ? (
          <Avatar size={65} icon={<TbUserEdit />} />
        ) : (
          <img
            src={auth.user?.image}
            width={120}
            style={{ borderRadius: "50%", boxShadow: "var(--boxshadow)" }}
          />
        )}
      </div>
      <div className="container-user-data">
        <div className="container-user-data-span">
          <span>Nome</span>
          <span>{auth.user.nome}</span>
        </div>
        <div className="container-user-data-span">
          <span>Usuário</span>
          <span>{auth.user?.login}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default User;
