import React, { useState } from 'react';
import './seller.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Seller(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [manzil, setManzil] = useState('')
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password.length < 8) {
            window.alert("Parol 8 ta belgidan kam bo'lmasin")
        } else {
            let data1 = {
                name: name,
                email: email,
                password: password,
                address: manzil
            }
            console.log(data1);
            try {
                let { data } = await axios.post('https://unimart-fast.up.railway.app/api/v1/seller/register', data1)
                if (data.msg) {
                    window.alert(data.msg)
                } else {
                    localStorage.setItem('userinfo',JSON.stringify(data));
                    navigate('/seller/dashboard')
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <div className='seller'>
            <div className='text3'>
                <h3>Do'koningizni ro'yxatdan o'tkazing</h3>
                <div className='text4'>
                    <Link to={'/'} className='text5'>Uyga </Link> / <Link to={'/seller'} className='text4'>"Do'koningizni ro'yxatdan o'tkazing"</Link>
                </div>
            </div>
            <div>
                <div className="quti1 bg-white rounded shadow-sm mb-3">
                    <div className="fs-15 fw-600 p-3 border-bottom">
                        Shaxsiy ma'lumotlar
                    </div>
                    <form onSubmit={handleSubmit} className="p-3">
                        <div className="form-group mt-2">
                            <label>Do'kon nomi <span className="text-primary">*</span></label>
                            <input type="text" className="form-control" placeholder="Nom" value={name} onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <div className="form-group mt-2">
                            <label>Sizning elektron manzilingiz <span className="text-primary">*</span></label>
                            <input type="email" className="form-control" placeholder="Elektron pochta" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="form-group mt-2">
                            <label>Sizning parolingiz <span className="text-primary">*</span></label>
                            <input type="password" className="form-control" placeholder="Parol" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div className="form-group mt-2 mb-2">
                            <label>Manzil <span className="text-primary">*</span></label>
                            <input type="text" className="form-control" placeholder="Manzil" value={manzil} onChange={(e) => { setManzil(e.target.value) }} />
                        </div>
                    </form>
                </div>
                <div className="quti2">
                    <button className='btn1 btn btn-danger' onClick={handleSubmit}>Ro'yxatdan o'tish</button>
                </div>
            </div>
        </div>
    );
}

export default Seller;