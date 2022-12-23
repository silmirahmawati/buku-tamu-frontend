import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export const NavbarAdmin = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .get("http://localhost:3040/logout", {
        withCredentials: true,
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.status == 200) {
          localStorage.removeItem("loggeduser");
          navigate("/login");
        }
      });
  };
  return (
    <div className="bg-black w-screen h-16 flex items-center text-white p-5 justify-between text-lg gap-3">
      <Link to={"/"}>
        <i className="fa-solid fa-house"></i>
      </Link>
      <div onClick={handleLogout} className="flex items-center gap-3">
        <h1>LOGOUT</h1>
        <i className="fa-solid fa-right-from-bracket"></i>
      </div>
    </div>
  );
};
