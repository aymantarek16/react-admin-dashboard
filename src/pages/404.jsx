import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const router = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      router("/");
    }, 2000);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        This Page is Not Found 🙃{" "}
      </h1>
    </div>
  );
};

export default NotFound;
