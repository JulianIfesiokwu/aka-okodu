import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h2 className="text-2xl">
        Unfortunately the page you are looking for does not exist.
      </h2>
      <div className="navigate">
        <button onClick={() => navigate(-1)}>Go back</button>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );
};

export default NotFound;
