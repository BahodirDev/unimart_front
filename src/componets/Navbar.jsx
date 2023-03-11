import React from 'react'
import '../App.css'
import Dpopdown2 from './dropdowns/dpopdown2'
import LaungareDropdown from './dropdowns/LaungareDropdown'
import { NavLink } from "react-router-dom"

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
                            <li><NavLink className="navbar_navlink"> Sotuvchi bo'ling</NavLink></li>
                            <li><NavLink to={'/login'} className="navbar_navlink"> Kirish</NavLink></li>
                            <li><NavLink to={'/register'} className="navbar_navlink">Ro'yhatdan o'tish</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='navbar_center_div'>
                <div className='navbar_center_div2'>
                    <div className='logo_div'>
                        <img src="" alt="" />
                    </div>
                    <div className='search_div'>

                    </div>
                    <div className='corzinka_div'>

                    </div>
                </div>
            </div>
            <div className='navbar_bottom_div'>

            </div>
        </div>
    )
}

export default Navbar