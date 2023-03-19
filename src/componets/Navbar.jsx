import React from 'react'
import { NavLink } from "react-router-dom"
import Dpopdown2 from './dropdowns/dpopdown2'
import LaungareDropdown from './dropdowns/LaungareDropdown'
function Navbar() {
    return (
        <div className='navbar_div'>
            <div className='navbar_top_div'>
                <div className='navbar_center_div_'>
                    <div className='language_div'>
                        <LaungareDropdown />
                        <Dpopdown2 />
                    </div>
                    <div className='navbar_center_page'>
                        <ul>
                            <li><NavLink className="navbar_navlink"> Help line +998997960152</NavLink></li>
                            <li><NavLink to={'/seller'} className="navbar_navlink"> Sotuvchi bo'ling</NavLink></li>
                            <li><NavLink to={'/login'} className="navbar_navlink"> Kirish</NavLink></li>
                            <li><NavLink to={'/register'} className="navbar_navlink">Ro'yhatdan o'tish</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='navbar_center_div'>
                <div className='navbar_center_div2'>
                    <div className='logo_div'>
                        <img className='navbar_logo' src="https://unimart.uz/uploads/all/cDW170KJr9KNZDbNJ8EuEqEOjRA55SyiFHvu6O9e.png" alt="" />
                    </div>
                    <div className='serach_corzinca_div'>
                        <div className='search_div'>
                            <input type="text" placeholder='Qidirish..' className='navbar_search_input' />
                            <div className='search_button'>
                                <i className="material-icons">search</i>
                            </div>
                        </div>
                        <div className='corzinka_div'>
                            <div className='d-flex _cursor_pointer'>
                                <div className="position-relative ">
                                    <i id='compare_icons' className='material-icons '>autorenew</i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        3
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </div>
                                <p className='carts_text'>Taqqoslash</p>
                            </div>
                            <div className='d-flex _cursor_pointer'>
                                <div className="position-relative">
                                    <i id='compare_icons' className='material-icons '>favorite_border</i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        3
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </div>
                                <p className='carts_text'>Istaklar ro'yati</p>
                            </div>
                            <div className='d-flex _cursor_pointer'>
                                <div className="position-relative">
                                    <i id='compare_icons' className='material-icons '>shopping_cart</i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        3
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </div>
                                <p className='carts_text'>Savatcha</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navbar_bottom_div'>
                <div className='bottom_page'>
                    <ul>
                        <li><NavLink to={"/"} className="bottom_navlink">Uyga</NavLink></li>
                        <li><NavLink to={"/"} className="bottom_navlink">Barcha breandlar</NavLink></li>
                        <li><NavLink to={"/"} className="bottom_navlink">Barcha kategoriyalar</NavLink></li>
                        <li><NavLink to={"/"} className="bottom_navlink">Flash-salle</NavLink></li>
                        <li><NavLink to={"/"} className="bottom_navlink">Auksion mahsulotlari</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar