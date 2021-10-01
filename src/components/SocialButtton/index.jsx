import React from 'react'
import './style.scss'

function SocialButton(props) {
    return (
        <a className="socialbutton" href={props.href || "#"}>
            <div className="socialbutton__icon">
                <img src={props.icon} alt="icon" />
            </div>
            <div className="socialbutton__content">
                <div className="socialbutton__content--title">
                    { !props.title ? "@HACKTZI" : props.title }  
                </div>
                <div className="socialbutton__content--description">
                    {props.description}
                </div>
            </div>
        </a>
    )
}

export default SocialButton
