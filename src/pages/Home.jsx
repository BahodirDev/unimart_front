import React from 'react'
import { NavLink } from 'react-router-dom'
import Accordion from '../componets/Accordion'
import AuctionProducts from '../componets/AuctionProducts'
import BestSellers from '../componets/BestSellers'
import HomeCarusel from '../componets/carusels/HomeCarusel'
import NewProducts from '../componets/NewProducts'

function Home() {
    return (
        <div className='body_div'>
            <div className='center_div_body'>
                <div className='body_div2'>
                    <div className='categpry_div'>
                        <Accordion />
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
            <div className='category_img_body'>
                <div className='category_img'>
                    <NavLink to={"/category"}>
                        <img src="https://unimart.uz/uploads/all/DwqfyEOvqUmlfhuBTtuXHKFxogWYDhHMH6JLZJuN.png" alt="" />
                    </NavLink>
                    <NavLink to={"/category"}>
                        <img src="https://unimart.uz/uploads/all/5jAhiF0xeZ8OHabvBW5LN5F332oNLEygo8M9Q1ll.png" alt="" />
                    </NavLink>
                    <NavLink to={"/category"}>
                        <img src="https://unimart.uz/uploads/all/nZRCgBOuCBp8XTVOONoFk5tIarvBH3Zcy7oXHis3.png" alt="" />
                    </NavLink>
                </div>
            </div>
            <div className='new_products_div'>
                <NewProducts title={"Yangi mahsulotlar"} />
            </div>
            <div className='new_products_div'>
                <NewProducts title={"Tanlangan mahsulotlar"} />
            </div>
            <div className='new_products_div'>
                <NewProducts title={"Eng yaxshi sotilgan"} buttonTitle={"Top 20"} />
            </div>
            <div className='auction_aroducts_div'>
                <AuctionProducts />
            </div>
            <div className='best_sellers_div'>
                <BestSellers />
            </div>

        </div>
    )
}

export default Home