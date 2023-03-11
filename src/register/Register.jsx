import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './register.css'

function Register(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [check, setChek] = useState(false)
    return (
        <div className='register'>
            <div className='quti'>
                <div>
                    <h3>Ro'yxatdan o'tish</h3>
                </div>
                <form className='form'>
                    <input type="text" className='inp form-control' value={name} placeholder="To'liq ismi sharif" onChange={(e) => { setName(e.target.value) }} />
                    <input type="email" className='inp form-control' placeholder="Elektron pochta" onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="password" className='inp form-control' placeholder="Parol" onChange={(e) => { setPassword(e.target.value) }} />
                    <input type="text" className='inp form-control' placeholder="Parolni tasdiqlang" onChange={(e) => { setPassword2(e.target.value) }} />
                    <label className="label">
                        <input type="checkbox" required="" />
                        <span className="opacity-60 mt-4">Ro'yxatdan o'tish orqali siz bizning shartlarimizga rozilik bildirasiz.</span>
                        <span className="aiz-square-check"></span>
                    </label>
                    <button className='btn btn-danger'>Ro'yxatdan o'tish</button>
                </form>
                <div class="separator mt-5 mb-3">
                    <span class="bg-white px-3 opacity-60">Yoki qo'shiling</span>
                </div>
                <ul class="list-inline social colored text-center mb-5">
                    <li class="list-inline-item">
                        <a href="https://unimart.uz/social-login/redirect/facebook" class="facebook">
                        <i class="i fa-brands fa-facebook"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://unimart.uz/social-login/redirect/google" class="google">
                        <i class="i fa-brands fa-google"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://unimart.uz/social-login/redirect/twitter" class="twitter">
                        <i class="i fa-brands fa-twitter"></i>
                        </a>
                    </li>
                </ul>
                <div class="text-center">
                    <p class="text-muted mb-0">Allaqachon hisobingiz bormi</p>
                    <Link to={"/login"} className='text'>
                        Kirish
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;