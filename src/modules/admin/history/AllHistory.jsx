import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AllHistory = () => {
  const [kunjungan, setKunjungan] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const userLevel = JSON.parse(localStorage.getItem("loggeduser"))?.level;
    if (!userLevel) {
      navigate("/login");
    } else if (userLevel != 1) {
      navigate("/");
    }
    getKunjungan();
  }, []);
  const getKunjungan = async () => {
    await axios.get("http://localhost:3040/admin/kunjungan").then((res) => {
      setKunjungan(res.data);
    });
  };
  return (
    <div className="bg-emerald-200 w-screen h-screen flex flex-col justify-between items-center">
      <div className="bg-black w-screen h-16 flex items-center text-white p-5 justify-start text-lg gap-3">
        <Link to="/admin/dashboard">
          <i className="fa-solid fa-arrow-left-long"></i>
        </Link>
      </div>
      <div className="grow flex w-full h-full justify-center p-5">
        <div className="overflow-auto w-full h-full rounded-xl">
          <div className="overflow-auto">
            <table cellPadding="8">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Tanggal</th>
                  <th>Nama</th>
                  <th>NIM</th>
                  <th>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {kunjungan.map((k, index) => {
                  let tanggal = new Date(k.waktu);
                  return (
                    <tr key={index}>
                      <td>{++index}</td>
                      <td>{`${tanggal.getDate()}-${tanggal.getMonth()}-${tanggal.getFullYear()}`}</td>
                      <td>{k.nama}</td>
                      <td>{k.nim}</td>
                      <td>{k.keterangan}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
