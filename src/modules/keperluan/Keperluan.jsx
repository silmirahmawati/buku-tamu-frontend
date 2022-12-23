import axios from "axios";
import React, { useState } from "react";
import keperluan from "./keperluan.svg";
import { useNavigate, useLocation } from "react-router-dom";

export const Keperluan = () => {
  const [keperluan, setKeperluan] = useState("");
  const [showWarning, setShowWarning] = useState([false, ""]);
  const navigate = useNavigate();
  const { state } = useLocation();
  const handleKirim = () => {
    console.log(state);
    axios
      .post(
        "http://localhost:3040/kunjungan",
        {
          keterangan: keperluan,
          token: state.token,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        if (res.status == 200) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status == 403) {
          setShowWarning([true, "Token Kedaluwarsa"]);
        }
      });
  };

  return (
    <div className="bg-emerald-200 h-screen w-screen p-10 flex flex-col justify-around">
      <div className="grow flex justify-center items-center">
        <img src={keperluan} className="w-64 h-64" />
      </div>
      <div className="bg-white w-full rounded-2xl">
        <h1 className="p-3 font-bold text-lg">Keperluan</h1>
        <div className="w-full px-3 py-1">
          <textarea
            rows="5"
            className="border w-full border-gray-400"
            onChange={(e) => {
              setKeperluan(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="flex justify-center ">
          <button
            type="submit"
            className="bg-gray-400 px-16 mb-5 rounded-2xl text-white text-lg"
            onClick={handleKirim}
          >
            Kirim
          </button>
        </div>
      </div>
      {showWarning[0] && (
        <div className="backdrop-brightness-50 w-screen h-screen fixed top-0 left-0 flex justify-center items-center p-5">
          <div className="bg-white rounded-2xl flex flex-col justify-around items-center w-full h-64">
            <p className="text-2xl">{showWarning[1]}</p>
            <button
              className="bg-emerald-500 text-white px-20 py-3 rounded-full"
              onClick={() => {
                setShowWarning([false, ""]);
                navigate("/");
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
