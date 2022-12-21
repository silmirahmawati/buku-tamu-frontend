import React from 'react'
import { useState } from 'react'
import { NavbarAdmin } from '../../../shared/NavbarAdmin'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
const [kunjungan, setKunjungan] = useState([
    {tanggal: '31/10/22', nama: 'Silmi Rahmawati', nim: '1207050120', keterangan: 'kuliah PAW'},
    {tanggal: '31/10/22', nama: 'Silmi Rahmawati', nim: '1207050120', keterangan: 'kuliah PAW'},
    {tanggal: '31/10/22', nama: 'Silmi Rahmawati', nim: '1207050120', keterangan: 'kuliah PAW'},
    {tanggal: '31/10/22', nama: 'Silmi Rahmawati', nim: '1207050120', keterangan: 'kuliah PAW'},
    {tanggal: '31/10/22', nama: 'Silmi Rahmawati', nim: '1207050120', keterangan: 'kuliah PAW'},
    {tanggal: '31/10/22', nama: 'Silmi Rahmawati', nim: '1207050120', keterangan: 'kuliah PAW'},
    {tanggal: '31/10/22', nama: 'Silmi Rahmawati', nim: '1207050120', keterangan: 'kuliah PAW'},
    {tanggal: '31/10/22', nama: 'Silmi Rahmawati', nim: '1207050120', keterangan: 'kuliah PAW'},
    {tanggal: '31/10/22', nama: 'Silmi Rahmawati', nim: '1207050120', keterangan: 'kuliah PAW'},
    {tanggal: '31/10/22', nama: 'Silmi Rahmawati', nim: '1207050120', keterangan: 'kuliah PAW'},
    {tanggal: '31/10/22', nama: 'Silmi Rahmawati', nim: '1207050120', keterangan: 'kuliah PAW'},
    {tanggal: '31/10/22', nama: 'Silmi Rahmawati', nim: '1207050120', keterangan: 'kuliah PAW'},
    {tanggal: '31/10/22', nama: 'Silmi Rahmawati', nim: '1207050120', keterangan: 'kuliah PAW'},
    {tanggal: '31/10/22', nama: 'Silmi Rahmawati', nim: '1207050120', keterangan: 'kuliah PAW'},
    {tanggal: '31/10/22', nama: 'Silmi Rahmawati', nim: '1207050120', keterangan: 'kuliah PAW'},
    {tanggal: '31/10/22', nama: 'Silmi Rahmawati', nim: '1207050120', keterangan: 'kuliah PAW'},
    {tanggal: '31/10/22', nama: 'Silmi Rahmawati', nim: '1207050120', keterangan: 'kuliah PAW'},
]) 
  return (
    <div className='bg-white w-screen h-screen flex flex-col justify-between items-center'>
        <NavbarAdmin/>
        <div className='grow p-5 w-full'>
            <div className='font-bold'><h1>Selamat Datang ...</h1></div>
            <div className='bg-emerald-100 border-t-8 border-emerald-200 rounded-xl p-5 flex gap-3 w-full mt-5'>
                <div className='bg-white w-16 h-16 flex justify-center items-center text-3xl rounded-full'><i class="fa-regular fa-address-card"></i></div>
                <div>
                    <h1 className='text-emerald-800'>Jumlah Kunjungan</h1>
                    <h1 className='text-emerald-800 font-bold'>5</h1>
                </div>
            </div>
            <div className='bg-emerald-100 border-t-2 border-emerald-200 rounded-lg mt-4 w-full p-5'>
                <h1>Daftar Kunjungan</h1>
                <div className='overflow-auto'>
                <table cellPadding='8'>
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
                        {kunjungan.map((k,index) => 
                        index<=7&&
                        <tr>
                            <td>{index}</td>
                            <td>{k.tanggal}</td>
                            <td>{k.nama}</td>
                            <td>{k.nim}</td>
                            <td>{k.keterangan}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
                </div>
                <Link to="/admin/history"><button className='bg-emerald-500 py-1 px-8 rounded-xl text-white'>selengkapnya ...</button></Link>
            </div>
        </div>
    </div>
  )
}
