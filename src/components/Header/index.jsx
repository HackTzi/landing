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
                    <li>Home</li>
                    <li>Eventos</li>
                    <li>Blog</li>
                    <li>Coming Soon</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
