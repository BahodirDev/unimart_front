import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer_header_div'>
            <div className='footer_bosy_div'>
                <div className='post_email'>
                    <img className='footer_logo' src="https://unimart.uz/uploads/all/Tf04obOLKVawyXVHfvqqWER4t5tv7lBng4AqzcUo.png" alt="" />
                    <div className='email_input_div'>
                        <input type="email" name="" id="" placeholder='Sizning e-pochta manzilingiz' />
                        <div>
                            <h4>Obuna bo'ling</h4>
                        </div>
                    </div>
                </div>
                <div className='url_footer'>
                    <div className='contact_div'>
                        <h6>ALOQA UCHUN MA'LUMOTLAR</h6>
                        <b>Manzil:</b>
                        <p>Toshkent</p>
                        <b>Telefon:</b>
                        <p>+998997960152</p>
                        <b>Elektron pochta:</b>
                        <p>Npulat86@gmail.com</p>
                    </div>
                    <div className='my_profile'>
                        <h6>MENING PROFILIM</h6>
                        <ul>
                            <li><NavLink className="footer_navlink" to={"/"}>Kirish</NavLink></li>
                            <li><NavLink className="footer_navlink" to={"/"}>Buyurtma tarixi</NavLink></li>
                            <li><NavLink className="footer_navlink" to={"/"}>Mening istaklar roʻyxatim</NavLink></li>
                            <li><NavLink className="footer_navlink" to={"/"}>Buyurtmani kuzatish</NavLink></li>
                            <li><NavLink className="footer_navlink" to={"/"}>Hamkor bo'lish</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer