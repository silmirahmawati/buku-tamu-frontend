import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import QRCode from "react-qr-code";
import Printer, { print } from "react-pdf-print";
import { useNavigate } from "react-router-dom";

export const PrintQR = () => {
  const [qrValue, setQrValue] = useState("");
  const ids = ["1"];
  const navigate = useNavigate();
  useEffect(() => {
    const userLevel = JSON.parse(localStorage.getItem("loggeduser"))?.level;
    if (!userLevel) {
      navigate("/login");
    } else if (userLevel != 1) {
      navigate("/");
    }
    getToken();
  }, []);
  useEffect(() => {
    if (qrValue != "") {
      window.print();
    }
  }, [qrValue]);
  const getToken = async () => {
    await axios.get("http://localhost:3040/token").then((res) => {
      const value = `buku-tamu/${res.data.token}`;
      setQrValue(value);
    });
  };
  return (
    <div className="p-5 max-w-md flex flex-col" id={ids[0]}>
      <h1 className="text-center text-xl font-bold my-8">
        BukuTamu QR Code Hari Ini
      </h1>

      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={qrValue}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};
