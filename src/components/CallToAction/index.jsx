import React from 'react'
import imageMorfeo from '../../assets/images/morfeo.png'
import './style.scss'

function CallToAction() {
    return (
        <div className="calltoaction">
            <div className="calltoaction__img">
                <img src={imageMorfeo} alt="morfeo" className="calltoaction__img"/>
                <div className="calltoaction__img--btns">
                    <a href="/">
                       Discord     
                    </a>
                    <a href="/">
                        Telegram
                    </a>
                </div>
            </div>
            <div className="calltoaction__text">
                <p >
                    "Esta es tu última oportunidad, sin retorno"
                </p>

            </div>
            
        </div>
    )
}

export default CallToAction;
