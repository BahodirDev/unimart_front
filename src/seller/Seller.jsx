import React, { useState } from 'react';
import './seller.css'
import { Link, useNavigate } from 'react-router-dom'

function Seller(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [dokon, setDokon] = useState('')
    const [manzil, setManzil] = useState('')
    const navigate = useNavigate();
    const [data, setData] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password || !password || !dokon || !manzil) {
            window.alert("Formani to'ldiring")
        } else {
            setData({ name: name, email: email, password: password, password2: password2, dokon: dokon, manzil: manzil })
            console.log(data);
            navigate('/')
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
                            <label>Ismingiz <span className="text-primary">*</span></label>
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
                            <label>Parolni qaytadan kiriting <span className="text-primary">*</span></label>
                            <input type="password" className="form-control" placeholder="Parolni tasdiqlang" value={password2} onChange={(e) => { setPassword2(e.target.value) }} />
                        </div>
                    </form>
                </div>
                <div className="quti1 bg-white rounded shadow-sm mb-4">
                    <div className="fs-15 fw-600 p-3 border-bottom">
                        Asosiy ma'lumotlar
                    </div>
                    <form onSubmit={handleSubmit} className="p-3">
                        <div className="form-group">
                            <label>Do'kon nomi <span className="text-primary">*</span></label>
                            <input type="text" className="form-control" placeholder="Do'kon nomi" value={dokon} required onChange={(e) => { setDokon(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label>Manzil <span className="text-primary">*</span></label>
                            <input type="text" className="form-control mb-3" placeholder="Manzil" value={manzil} required onChange={(e) => { setManzil(e.target.value) }} />
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