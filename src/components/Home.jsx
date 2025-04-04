import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/test");
  };
  
  return (
    <div>
      Home
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
