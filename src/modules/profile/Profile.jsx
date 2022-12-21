import React from 'react'
import { Navbar } from '../../shared/Navbar'
import profile from './profile.jpg'

export const Profile = () => {
  return (
    <div className='h-screen flex flex-col bg-emerald-200'>
        <div className='grow flex flex-col justify-between'>
            <div className='bg-neutral-900 w-full h-16 flex px-6 items-center text-slate-100 justify-between'>
                <p className='font-bold text-3xl'>Profile</p>
                <i className="fa-solid fa-arrow-right-from-bracket text-2xl"></i>
            </div>
            <div className='bg-white w-full h-[480px] rounded-t-[60px] flex justify-center '>
                <div className='absolute'>
                    <img src={profile} className='bg-emerald-500 w-24 h-24 relative -top-12 rounded-full'/>
                </div>
                <div className='pt-24 px-10 w-full flex flex-col gap-8'> 
                    <input type="text" placeholder='Silmi Rahmawati' className='border border-slate-400 p-2 w-full rounded-lg outline-emerald-400'/>
                    <input type="text" placeholder='1207050120' className='border border-slate-400 p-2 w-full rounded-lg outline-emerald-400'/>
                    <input type="text" placeholder='Teknik Informatika' className='border border-slate-400 p-2 w-full rounded-lg outline-emerald-400'/>
                    <button className='bg-gray-500 text-slate-100 w-fit self-end py-2 px-6 rounded-lg'>Edit</button>
                </div>

            </div>
        </div>
        <Navbar/>
    </div>
  )
}
