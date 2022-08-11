import React from 'react';
import { HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";


const HomeBtn = () => {
     const navigate = useNavigate();
  return (
    <HomeOutlined
      style={{ fontSize: "30px", color: "rebeccapurple", display: "block" }}
      onClick={() => navigate("/")}
    />
  );
}

export default HomeBtn;;