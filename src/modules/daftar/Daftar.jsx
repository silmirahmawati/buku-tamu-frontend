import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Daftar = () => {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const _register = async () => {
    await fetch("http://localhost:3040/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        nim: nim,
        password: password,
        jurusan: jurusan,
        nama: nama,
      }),
    })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          navigate("/login", { replace: true });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col justify-between bg-emerald-200 w-screen h-screen">
      <div className="flex items-center p-5 gap-5 bg-black w-full h-20 text-white">
        <div>
          <Link to="/login">
            <i className="fa-solid fa-arrow-left text-2xl "></i>
          </Link>
        </div>
        <div className="font-bold text-lg">Form Pendaftaran Tamu</div>
      </div>
      <div className="bg-white w-full rounded-t-[60px] px-5 py-20 flex flex-col justify-center items-center">
        <h1 className="font-bold ">Form Pendaftaran Tamu</h1>
        <div className="my-5 shrink-0 w-full">
          <input
            type="text"
            className="w-full h-16 border border-gray-500 rounded-xl px-5"
            placeholder="NAMA"
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className="shrink-0 w-full">
          <input
            type="text"
            className="w-full h-16 border border-gray-500 rounded-xl px-5"
            placeholder="NIM"
            onChange={(e) => setNim(e.target.value)}
          />
        </div>
        <div className="my-5 shrink-0 w-full">
          <input
            type="text"
            className="w-full h-16 border border-gray-500 rounded-xl px-5"
            placeholder="Jurusan"
            onChange={(e) => setJurusan(e.target.value)}
          />
        </div>
        <div className="mb-5 shrink-0 w-full">
          <input
            type="password"
            className="w-full h-16 border border-gray-500 rounded-xl px-5"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="my-5">
          <button
            type="submit"
            className="py-2 px-16 bg-gray-500 text-white rounded-2xl"
            onClick={_register}
          >
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
};
