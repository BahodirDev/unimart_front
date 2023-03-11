import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeCarusel from '../componets/carusels/HomeCarusel'

function Home() {
    return (
        <div className='body_div'>
            <div className='center_div_body'>
                <div className='body_div2'>
                    <div className='categpry_div'>
                        <div>
                            <h5>Kategotiyalar</h5>
                        </div>
                        <div className='category_card_body'>
                            <NavLink to={"/category"} className='category_card'>
                                <img src="https://unimart.uz/uploads/all/8K6TpHoouUdZY2Zw0WHPiWkNWHorugIs856jbeVW.png" alt="" />
                                <p>Telefonlar va aksessuarlar</p>
                            </NavLink>
                            <NavLink to={"/category"} className='category_card'>
                                <img src="https://unimart.uz/uploads/all/rxGxryBY0H07QaUoOmh3AWXlm0QIaKgUmdFrKl0e.png" alt="" />
                                <p>Kompyuterlar va ofis jihozlari</p>
                            </NavLink>
                            <NavLink to={"/category"} className='category_card'>
                                <img src="https://unimart.uz/uploads/all/nwnSYA4Z5eyVsZBXynMrqfeAdVrELOl3f7zao5mx.jpg" alt="" />
                                <p>Maishiy texnika</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='carusel_div'>
                        <div>
                            <HomeCarusel />
                        </div>

                        <div className='carusel_card_body'>
                            <div className='carusel_card'>
                                <div>
                                    <img src="https://unimart.uz/uploads/all/Zcby6VZlTFMtx2Q2fIaEgALdCZYhDELLgDplFCzO.jpg" alt="" />
                                    <b>Erkaklar Kiyimi</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='reklama_div'>
                        <div className='reklama_div_title'>
                            <h5>Bugungi bitim</h5>
                            <h6>Issiq</h6>
                        </div>

                        <div className='card_body_div'>
                            <div className='card_div'>
                                <img src="https://unimart.uz/uploads/all/s1vm0CinL8prsr2mtyUH9blUUIud3tgEVNKO32nE.jpg" alt="" />
                                <p>25,000 UZS</p>
                            </div>
                            <div className='card_div'>
                                <img src="https://unimart.uz/uploads/all/1Umem5TVj3SQJNHtWxCIdJeE9q7co49tfOnCKCKR.jpg" alt="" />
                                <p>36,000 UZS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home