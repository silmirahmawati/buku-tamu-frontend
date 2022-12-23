import React, { useState } from "react";
import { useEffect } from "react";
import { Navbar } from "../../shared/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const History = () => {
  const [dataKunjungan, setDataKunjungan] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userLevel = JSON.parse(localStorage.getItem("loggeduser"))?.level;
    if (!userLevel) {
      navigate("/login");
    }
    getHistory();
  }, []);

  const getHistory = async () => {
    await axios
      .get("http://localhost:3040/kunjungan", {
        withCredentials: true,
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      })
      .then(function (data) {
        console.log(data);
        setDataKunjungan(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col h-screen bg-slate-200">
      <div className="bg-emerald-200 w-full h-20 shrink-0 flex justify-center items-center shadow-lg">
        <p className="font-bold text-3xl">History</p>
      </div>

      <div className="p-10 overflow-y-scroll grow">
        <table className="text-sm w-full text-gray-600" cellPadding={"5px"}>
          <tbody>
            {dataKunjungan.map((data, index) => {
              const tanggal = new Date(data.waktu);
              console.log(tanggal);
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{`${tanggal.getDate()}-${tanggal.getMonth()}-${tanggal.getFullYear()}`}</td>
                  <td>{data.keterangan}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Navbar />
    </div>
  );
};
