import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './register.css'

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [check, setChecked] = useState('')
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!check) {
            window.alert("Meni eslab qolish belgilanmagan")
        }
        else {
            if (password.length < 8) {
                window.alert("Parol 8 ta belgidan kam bo'lmasin")
            } else {
                let data1 = {
                    email: email,
                    password: password,
                }
                try {
                    let { data } = await axios.post('https://unimart-fast.up.railway.app/api/v1/seller/login', data1)
                    if (data.msg) {
                        window.alert(data.msg)
                    } else {
                        localStorage.setItem('userinfo', JSON.stringify(data));
                        navigate('/seller/dashboard')
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
    // const [check, setChek] = useState(false)
    return (
        <div className='register'>
            <div className='quti'>
                <div>
                    <h3>Hisobingizga kiring.</h3>
                </div>
                <form className='form' onSubmit={handleSubmit}>
                    <input type="email" className='inp form-control' value={email} placeholder="Elektron pochta" onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="password" className='inp form-control' value={password} placeholder="Parol" onChange={(e) => { setPassword(e.target.value) }} />
                    <div className='a mt-4'>
                        <label className="label separator">
                            <input type="checkbox" onChange={(e) => { setChecked(e.target.value) }} required="" />
                            <span className="opacity-60">Meni eslab qoling</span>
                            <span className="aiz-square-check"></span>
                        </label>
                        <span className="opacity-60">
                            <Link to={'/password'} className="text" >Parolni unutdingizmi</Link>
                        </span>
                    </div>
                    <button className='btn btn-danger' onClick={handleSubmit}>Kirish</button>
                </form>
                <div className="separator mt-5 mb-3">
                    <span className="bg-white px-3 opacity-60">Yoki kiring</span>
                </div>
                <ul className="list-inline social colored text-center mb-5">
                    <li className="list-inline-item">
                        <a href="/login" className="facebook">
                            <i className="i fa-brands fa-facebook"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/login" className="google">
                            <i className="i fa-brands fa-google"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/login" className="twitter">
                            <i className="i fa-brands fa-twitter"></i>
                        </a>
                    </li>
                </ul>
                <div className="text-center">
                    <p className="text-muted mb-0">Sizda hisob raqamingiz yo'qmi?</p>
                    <Link to={"/register"} className='text'>
                        Roʻyxatdan oʻting
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;