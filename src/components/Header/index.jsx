import React from 'react'
import logo from '../../assets/images/logo.png'
import './style.scss'

function Header() {
    return (
        <div className="header"> 
            <div className="header___img">
                <img src={logo} alt="logo hacktzi" />
            </div>           
            <div className="header__items">
                <ul>
                    <li className="active"><a href="/">Home</a></li>
                    <li>Eventos</li>
                    <li className="disable">Blog</li>
                    <li className="disable--button">Coming Soon</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
