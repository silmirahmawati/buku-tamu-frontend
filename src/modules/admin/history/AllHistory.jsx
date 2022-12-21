import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export const AllHistory = () => {
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
    <div className='bg-emerald-200 w-screen h-screen flex flex-col justify-between items-center'>
      <div className='bg-black w-screen h-16 flex items-center text-white p-5 justify-start text-lg gap-3'>
      <Link to="/admin/dashboard"><i className="fa-solid fa-arrow-left-long"></i></Link>
    </div>
      <div className='grow flex w-full h-full justify-center p-5'>
      <div className='overflow-auto w-full h-full rounded-xl'>
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
                    <td>{index+1}</td>
                    <td>{k.tanggal}</td>
                    <td>{k.nama}</td>
                    <td>{k.nim}</td>
                    <td>{k.keterangan}</td>
                </tr>
                )}
            </tbody>
        </table>
        </div>
        </div>
      </div>
    </div>
  )
}
