import React from 'react';
import { Link } from 'react-router-dom';
import './seller.css'
import Setting from './Setting';

function SellerDashboard(props) {
    return (
        <div className='main'>
            <div className="aiz-sidebar left c-scrollbar">
                <div className="aiz-side-nav-logo-wrap">
                    <div className="d-block text-center">
                        <img className="mw-100 mb-3 img" src="https://unimart.uz/uploads/all/cDW170KJr9KNZDbNJ8EuEqEOjRA55SyiFHvu6O9e.png" alt="Unimart" />
                        <h3 className="fs-16  m-0 text-primary">News</h3>
                        <p className="text-primary email"></p>
                    </div>
                </div>
                <div className="aiz-side-nav-wrap">
                    <div className="px-20px mb-3">
                        <input className="inp7 form-control bg-soft-secondary border-0 form-control-sm text-white" type="text" placeholder="Menyuda qidirish" />
                    </div>
                    <ul className="aiz-side-nav-list" id="search-menu">
                    </ul>
                    <ul className="aiz-side-nav-list metismenu" id="main-menu" data-toggle="aiz-side-menu">
                        <li className="aiz-side-nav-item">
                            <Link to={"seller/dashboard"} className="aiz-side-nav-link">
                                <i className="fa-sharp fa-solid fa-house icn"></i>
                                <span className="aiz-side-nav-text">Boshqaruv paneli</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item" >
                            <Link to={"/"} className="aiz-side-nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-sharp fa-solid fa-cart-shopping icn"></i>
                                <span className="aiz-side-nav-text" >Mahsulot(lar)</span>
                                <span className="aiz-side-nav-arrow" />
                            </Link>
                            <ul className="aiz-side-nav-list level-2 mm-collapse dropdown-menu">
                                <li className="aiz-side-nav-item">
                                    <Link to={"/product/create"} className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Mahsulot(lar)</span>
                                    </Link>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <Link to={"/"} className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Mahsulotni ommaviy yuklash</span>
                                    </Link>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <Link to={"/"} className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Raqamli mahsulotlari</span>
                                    </Link>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <Link to={"/"} className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Mahsulot sharhlari</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to={"/"} className="aiz-side-nav-link ">
                                <i className="fa-sharp fa-solid fa-folder-open icn"></i>
                                <span className="aiz-side-nav-text">Yuklangan fayllar</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to={"/"} className="aiz-side-nav-link ">
                                <i className="fa-solid fa-bullhorn icn"></i>
                                <span className="aiz-side-nav-text">Kupon</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to={'/'} className="aiz-side-nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-sharp fa-solid fa-gavel icn"></i>
                                <span className="aiz-side-nav-text">Auction</span>
                                <span className="aiz-side-nav-arrow" />
                            </Link>
                            <ul className="aiz-side-nav-list level-2 mm-collapse dropdown-menu">
                                <li className="aiz-side-nav-item">
                                    <Link to={"/"} className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Barcha auksion mahsulotlari</span>
                                    </Link>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <Link to={"/"} className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Auction Product Orders</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to={"/"} className="aiz-side-nav-link ">
                                <i className="fa-sharp fa-solid fa-money-bill icn"></i>
                                <span className="aiz-side-nav-text">Buyurtmalar</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item mm-active">
                            <Link to={"/"} className="aiz-side-nav-link active" aria-expanded="true">
                                <i className="fa-sharp fa-solid fa-backward icn"></i>
                                <span className="aiz-side-nav-text">To'lovni qaytarish so'rovi olindi</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to={"/setting"} className="aiz-side-nav-link ">
                                <i className="fa-solid fa-gear icn"></i>
                                <span className="aiz-side-nav-text">Do'kon sozlamalari</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to={"/"} className="aiz-side-nav-link ">
                                <i className="fa-solid fa-clock-rotate-left icn"></i>
                                <span className="aiz-side-nav-text">To'lovlar tarixi</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to={"/"} className="aiz-side-nav-link ">
                                <i className="fa-solid fa-money-bill-wave icn"></i>
                                <span className="aiz-side-nav-text">Pul yechib olish</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to={"/"} className="aiz-side-nav-link">
                                <i className="fa-solid fa-file-invoice icn"></i>
                                <span className="aiz-side-nav-text">Commission History</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to={"/"} className="aiz-side-nav-link ">
                                <i className="fa-sharp fa-solid fa-atom icn"></i>
                                <span className="aiz-side-nav-text">Qo'llab-quvvatlash tiketi</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='quti77'>
                <div className='aiz-topbar'>
                </div>
                <Setting/>
            </div>
        </div>
    );
}

export default SellerDashboard;