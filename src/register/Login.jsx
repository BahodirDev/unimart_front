import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import './register.css'

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const [data, setData] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            window.alert("Formani to'ldiring")
        } else {
            setData({ email: email, password: password})
            console.log(data);
            navigate('/')
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
                        <label className="aiz-checkbox label">
                            <input type="checkbox" required="" />
                            <span className="opacity-60">Meni eslab qoling</span>
                            <span className="aiz-square-check"></span>
                        </label>
                        <span className="opacity-60">Parolni unutdingizmi</span>
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