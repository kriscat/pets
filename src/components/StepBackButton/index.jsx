import React from "react";
import { CaretLeftFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const StepBackButton = () => {
  const navigate = useNavigate();
  return (
    <CaretLeftFilled
      style={{ fontSize: "45px", color: "rebeccapurple", position: "absolute", left: "2px" }}
      onClick={() => navigate("/pets")}
    />
  );
};

export default StepBackButton;
