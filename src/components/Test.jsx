import React from "react";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div>
      Test
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Test;
