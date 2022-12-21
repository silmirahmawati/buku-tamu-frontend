import React, {useState} from 'react'
import keperluan from './keperluan.svg'

export const Keperluan = () => {
  const [keperluan, setKeperluan]=useState("")

  return (
    <div className='bg-emerald-200 h-screen w-screen p-10 flex flex-col justify-around'>
        <div className='grow flex justify-center items-center'><img src={keperluan} className='w-64 h-64' /></div>
        <div className='bg-white w-full rounded-2xl'>
            <h1 className='p-3 font-bold text-lg'>Keperluan</h1>
            <div className='w-full px-3 py-1'>
                <textarea rows="5" className='border w-full border-gray-400' onChange={(e) => {setKeperluan(e.target.value)}}></textarea>
            </div>
            <div className='flex justify-center '>
                <button type='submit' className='bg-gray-400 px-16 mb-5 rounded-2xl text-white text-lg'>Kirim</button>
            </div>
        </div>
    </div>
  )
}
