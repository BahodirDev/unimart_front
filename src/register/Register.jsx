import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './register.css'

function Register(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const navigate = useNavigate();
    const [data, setData] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password || !password) {
            window.alert("Formani to'ldiring")
        } else {
            setData({ name: name, email: email, password: password, password2: password2 })
            console.log(data);
            navigate('/')
        }
    }
    return (
        <div className='register'>
            <div className='quti'>
                <div>
                    <h3>Ro'yxatdan o'tish</h3>
                </div>
                <form className='form' onSubmit={handleSubmit}>
                    <input type="text" className='inp form-control' value={name} placeholder="To'liq ismi sharif" onChange={(e) => { setName(e.target.value) }} required />
                    <input type="email" className='inp form-control' value={email} placeholder="Elektron pochta" onChange={(e) => { setEmail(e.target.value) }} required />
                    <input type="password" className='inp form-control' value={password} placeholder="Parol" onChange={(e) => { setPassword(e.target.value) }} required />
                    <input type="password" className='inp form-control' value={password2} placeholder="Parolni tasdiqlang" onChange={(e) => { setPassword2(e.target.value) }} required />
                    <label className="label separator">
                        <input type="checkbox" required />
                        <span className="opacity-60 mt-4">Ro'yxatdan o'tish orqali siz bizning shartlarimizga rozilik bildirasiz.</span>
                        <span className="aiz-square-check"></span>
                    </label>
                    <button className='btn btn-danger' onClick={handleSubmit}>Ro'yxatdan o'tish</button>
                </form>
                <div className="separator mt-5 mb-3">
                    <span className="bg-white px-3 opacity-60">Yoki qo'shiling</span>
                </div>
                <ul className="list-inline social colored text-center mb-5">
                    <li className="list-inline-item">
                        <a href="/" className="facebook">
                            <i className="i fa-brands fa-facebook"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/" className="google">
                            <i className="i fa-brands fa-google"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/" className="twitter">
                            <i className="i fa-brands fa-twitter"></i>
                        </a>
                    </li>
                </ul>
                <div className="text-center">
                    <p className="text-muted mb-0">Allaqachon hisobingiz bormi</p>
                    <Link to={"/login"} className='text'>
                        Kirish
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;