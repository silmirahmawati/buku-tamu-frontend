import React, { useState } from 'react'
import { Navbar } from '../../shared/Navbar'
import profile from './profile.jpg'
import { QrReader } from 'react-qr-reader';

export const Home = () => {
const [dataKunjungan, setDataKunjungan] = useState([
    {
        tanggal:'24 Oktober 2022',
        keterangan:'Perkuliahan Pengembangan Aplikasi Web'
    },
    {
        tanggal:'24 Oktober 2022',
        keterangan:'Perkuliahan Pengembangan Aplikasi Web'
    },
    {
        tanggal:'24 Oktober 2022',
        keterangan:'Perkuliahan Pengembangan Aplikasi Web'
    },
    {
        tanggal:'24 Oktober 2022',
        keterangan:'Perkuliahan Pengembangan Aplikasi Web'
    },
    {
        tanggal:'24 Oktober 2022',
        keterangan:'Perkuliahan Pengembangan Aplikasi Web'
    },
    {
        tanggal:'24 Oktober 2022',
        keterangan:'Perkuliahan Pengembangan Aplikasi Web'
    },
    {
        tanggal:'24 Oktober 2022',
        keterangan:'Perkuliahan Pengembangan Aplikasi Web'
    },
    {
        tanggal:'24 Oktober 2022',
        keterangan:'Perkuliahan Pengembangan Aplikasi Web'
    },
    {
        tanggal:'24 Oktober 2022',
        keterangan:'Perkuliahan Pengembangan Aplikasi Web'
    },
    {
        tanggal:'24 Oktober 2022',
        keterangan:'Perkuliahan Pengembangan Aplikasi Web'
    },
    {
        tanggal:'24 Oktober 2022',
        keterangan:'Perkuliahan Pengembangan Aplikasi Web'
    },
    {
        tanggal:'24 Oktober 2022',
        keterangan:'Perkuliahan Pengembangan Aplikasi Web'
    },
    {
        tanggal:'24 Oktober 2022',
        keterangan:'Perkuliahan Pengembangan Aplikasi Web'
    },
    {
        tanggal:'24 Oktober 2022',
        keterangan:'Perkuliahan Pengembangan Aplikasi Web'
    },
    {
        tanggal:'24 Oktober 2022',
        keterangan:'Perkuliahan Pengembangan Aplikasi Web'
    },
    {
        tanggal:'24 Oktober 2022',
        keterangan:'Perkuliahan Pengembangan Aplikasi Web'
    },
])
const [showQrReader, setShowQrReader] = useState(false);
  return (
    <div className='flex flex-col h-screen'>
        <div className='grow bg-emerald-200 flex flex-col justify-between'>
            <div className=''>
                <div className='bg-white w-screen h-64 rounded-b-[75px] flex flex-col justify-center items-center'>
                    <img src={profile} className='w-20 h-20 rounded-full'/>
                    <h1 className='mt-4'>1207050120</h1>
                    <h1 className='font-bold'>SILMI RAHMAWATI</h1>
                </div>
                <div className='relative -top-8 bg-emerald-500 p-4 w-fit m-auto rounded-2xl shadow-md'onClick={()=>setShowQrReader(true)}>
                <i className="fa-solid fa-qrcode text-white text-3xl"></i>
                </div>
            </div>
            <div className='bg-white rounded-t-[50px] w-screen h-80 px-5 pt-7 font-bold text-xl'>
            <p>History</p>
            <table className='text-sm w-full mt-5 text-gray-600' cellPadding={'5px'}>
                <tbody>
                {dataKunjungan.map((data,index)=>index<=5&&(<tr key={index}>
                    <td>{index+1}</td>
                    <td>{data.tanggal}</td>
                    <td>{data.keterangan}</td>
                </tr>))}
                </tbody>
            </table>
            </div>
        </div>
        <Navbar/>
        <div className='flex w-full h-full justify-center items-center absolute bg-black/50 ' style={{display: showQrReader?'flex':'none'}}>

            <div className="bg-white  p-4 shadow-lg">
                <i className="fa-regular fa-circle-xmark text-3xl" onClick={()=>setShowQrReader(false)}></i> 
                <QrReader videoContainerStyle={{ width:"20rem", height:"20rem"}}/></div>
        </div>
        
    </div>
  )
}
