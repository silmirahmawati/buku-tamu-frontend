import React, { useState } from 'react'
import { useEffect } from 'react'
import { Navbar } from '../../shared/Navbar'

export const History = () => {
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

    useEffect(() => {
        getHistory()
    }, [])

    const getHistory = async () => {
        await fetch('http://localhost:3000/kunjungan')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            setDataKunjungan(data)
        })
        .catch(function (error) {
        console.log(error);
        });
    }

  return (
    <div className='flex flex-col h-screen bg-slate-200'>
        <div className='bg-emerald-200 w-full h-20 shrink-0 flex justify-center items-center shadow-lg'>
            <p className='font-bold text-3xl'>History</p>
        </div>

        <div className='p-10 overflow-y-scroll grow'>
            <table className='text-sm w-full text-gray-600' cellPadding={'5px'}>
                <tbody>
                {dataKunjungan.map((data,index)=>{
                    const tanggal = new Date(data.waktu)
                    console.log(tanggal)
                    return (<tr key={index}>
                    <td>{index+1}</td>
                    <td>{`${tanggal.getDate()}-${tanggal.getMonth()}-${tanggal.getFullYear()}`}</td>
                    <td>{data.keterangan}</td>
                </tr>)
            })}
                </tbody>
            </table>
        </div>
            
        <Navbar/>
    </div>
  )
}
