import React, { useState } from "react";
import { Navbar } from "../../shared/Navbar";
import profile from "./profile.jpg";
import { QrReader } from "react-qr-reader";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const [dataKunjungan, setDataKunjungan] = useState([]);
  const [showQrReader, setShowQrReader] = useState(false);
  const [data, setData] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (data != "") {
      validateQR();
    }
  }, [data]);
  useEffect(() => {
    getHistory();
    setUser(JSON.parse(localStorage.getItem("loggeduser")));
    const userLevel = JSON.parse(localStorage.getItem("loggeduser"))?.level;
    if (!userLevel) {
      navigate("/login");
    }
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
  const validateQR = () => {
    console.log(data);
    if (data.split("/")[0] == "buku-tamu") {
      navigate("/keperluan", { state: { token: data.split("/")[1] } });
    } else {
      console.log("gagal");
    }
  };
  return (
    <div className="flex flex-col h-screen">
      <div className="grow bg-emerald-200 flex flex-col justify-between">
        <div className="">
          <div className="bg-white w-screen h-96 rounded-b-[75px] flex flex-col justify-center items-center gap-3">
            <img src={profile} className="w-20 h-20 rounded-full" />
            <h1 className="mt-4">{user.nim}</h1>
            <h1 className="font-bold">{user.nama}</h1>
            {user.level == 1 ? (
              <Link
                to={"/admin/dashboard"}
                className="bg-cyan-500 text-white px-4 py-2 rounded-lg"
              >
                Halaman Admin
              </Link>
            ) : (
              ""
            )}
          </div>
          <div
            className="relative -top-8 bg-emerald-500 p-4 w-fit m-auto rounded-2xl shadow-md"
            onClick={() => setShowQrReader(true)}
          >
            <i className="fa-solid fa-qrcode text-white text-3xl"></i>
          </div>
        </div>
        <div className="bg-white rounded-t-[50px] w-screen h-96 px-5 pt-7 font-bold text-xl">
          <p>History</p>
          <table
            className="text-sm w-full mt-5 text-gray-600"
            cellPadding={"5px"}
          >
            <tbody>
              {dataKunjungan.map(
                (data, index) =>
                  index <= 5 && (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.tanggal}</td>
                      <td>{data.keterangan}</td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Navbar />
      <div
        className="flex w-full h-full justify-center items-center absolute bg-black/50 "
        style={{ display: showQrReader ? "flex" : "none" }}
      >
        <div className="bg-white  p-4 shadow-lg">
          <i
            className="fa-regular fa-circle-xmark text-3xl"
            onClick={() => setShowQrReader(false)}
          ></i>
          <QrReader
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
              }

              if (!!error) {
                // console.info(error);
              }
            }}
            videoContainerStyle={{ width: "20rem", height: "20rem" }}
          />
        </div>
      </div>
    </div>
  );
};
