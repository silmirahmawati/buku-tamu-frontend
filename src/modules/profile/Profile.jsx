import axios from "axios";
import React, { useState } from "react";
import { Navbar } from "../../shared/Navbar";
import profile from "./profile.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Profile = () => {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [jurusan, setJurusan] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const userLevel = JSON.parse(localStorage.getItem("loggeduser"))?.level;
    if (!userLevel) {
      navigate("/login");
    }
    setNama(JSON.parse(localStorage.getItem("loggeduser"))?.nama);
    setNim(JSON.parse(localStorage.getItem("loggeduser"))?.nim);
    setJurusan(JSON.parse(localStorage.getItem("loggeduser"))?.jurusan);
  }, []);

  const handleSubmit = async () => {
    axios
      .put(
        "http://localhost:3040/user",
        {
          nama,
          nim,
          jurusan,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        if (res.status == 200) {
          localStorage.setItem(
            "loggeduser",
            JSON.stringify({ nama, nim, jurusan })
          );
          navigate("/");
        }
      });
  };
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
    <div className="h-screen flex flex-col bg-emerald-200">
      <div className="grow flex flex-col justify-between">
        <div className="bg-neutral-900 w-full h-16 flex px-6 items-center text-slate-100 justify-between">
          <p className="font-bold text-3xl">Profile</p>
          <button onClick={handleLogout}>
            <i className="fa-solid fa-arrow-right-from-bracket text-2xl"></i>
          </button>
        </div>
        <div className="bg-white w-full h-[480px] rounded-t-[60px] flex justify-center ">
          <div className="absolute">
            <img
              src={profile}
              className="bg-emerald-500 w-24 h-24 relative -top-12 rounded-full"
            />
          </div>
          <div className="pt-24 px-10 w-full flex flex-col gap-8">
            <input
              type="text"
              placeholder="Silmi Rahmawati"
              onChange={(e) => setNama(e.target.value)}
              className="border border-slate-400 p-2 w-full rounded-lg outline-emerald-400"
              defaultValue={nama}
            />
            <input
              type="text"
              placeholder="1207050120"
              onChange={(e) => setNim(e.target.value)}
              className="border border-slate-400 p-2 w-full rounded-lg outline-emerald-400"
              defaultValue={nim}
            />
            <input
              type="text"
              placeholder="Teknik Informatika"
              onChange={(e) => setJurusan(e.target.value)}
              className="border border-slate-400 p-2 w-full rounded-lg outline-emerald-400"
              defaultValue={jurusan}
            />
            <button
              className="bg-gray-500 text-slate-100 w-fit self-end py-2 px-6 rounded-lg"
              onClick={handleSubmit}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};
