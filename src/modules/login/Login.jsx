import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import login from './login.svg'

export const Login = () => {
  const [nim, setNim ] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const _login = async () => {
    await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        nim: nim,
        password: password
      })
    })
    .then(function (response) {
      console.log(response)
      if(response.status === 200){
        navigate('/',{replace: true});
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div className='flex flex-col justify-end bg-emerald-200 w-screen h-screen'>
      <div className='grow flex justify-center items-center'><img src={login} className='w-64 h-64' /></div>
        <div className='bg-white w-full rounded-t-[60px] px-5 py-10 flex flex-col justify-center items-center'>
            <h1 className='font-bold '>Form Login BukuTamu</h1>
            <div className='my-5 shrink-0 w-full'><input type="text" className='w-full h-16 border border-gray-500 rounded-xl px-5' placeholder='NIM' onChange={(e) => setNim(e.target.value)}/></div>
            <div className='shrink-0 w-full'><input type="password" className='w-full h-16 border border-gray-500 rounded-xl px-5' placeholder='Password' onChange={(e) => setPassword(e.target.value)} /></div>
            <div className='my-5'><button type='submit' className='py-2 px-16 bg-gray-500 text-white rounded-2xl' onClick={_login}>Masuk</button></div>
            <h1>Belum punya akun? <Link to="/daftar">daftar</Link></h1>
        </div>
    </div>
  )
}
