import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './register.css'

function Password(props) {
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    const [data, setData] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            window.alert("Formani to'ldiring")
        } else {
            setData({ email: email })
            console.log(data);
            navigate('/')
        }
    }
    return (
        <div className='register'>
            <div className='quti1'>
                <div className='text1'>
                    <h3>Parolni unutdingizmi</h3>
                    <p className='separator'>Parolni tiklash uchun elektron pochta manzilingizni kiriting.</p>
                </div>
                <form className='form mb-4' onSubmit={handleSubmit}>
                <input type="email" className='inp form-control' value={email} placeholder="Elektron pochta" onChange={(e) => { setEmail(e.target.value) }} />
                    <button className='btn btn-danger' onClick={handleSubmit}>Parolni tiklash havolasini yuborish</button>
                </form>
                <div className='text1'>
                    <Link className='text' to={'/login'}>Kirish sahifasiga qaytish</Link>
                </div>
            </div>
        </div>
    );
}

export default Password;