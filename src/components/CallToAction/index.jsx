import React from 'react'
import imageMorfeo from '../../assets/images/morfeo.png'
import './style.scss'

function CallToAction() {
    return (
        <div className="calltoaction">
            <div className="calltoaction__img">
                <img src={imageMorfeo} alt="morfeo" className="calltoaction__img" />
                <div className="calltoaction__img--btns">
                    <a href="https://discord.gg/JgtTu2fpsW" target="_blank">Discord</a>
                    <a href="https://t.me/HackTzi" target="_blank">Telegram</a>
                </div>
            </div>
            <div className="calltoaction__text">
                <p>"Esta es tu última oportunidad, sin <span className="">return;</span>"</p>
            </div>
        </div>
    )
}

export default CallToAction;
