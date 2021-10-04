import React from 'react'
import './style.scss'

function About() {
    return (
        <div className="about">
            <div className="about__content">
                <h1>🤔 ¿Qué es HackTzi?</h1>
                <p>Somos una comunidad Tech donde nos dedicamos a compartir sobre desarrollo, diseño y marketing inspirada en la plataforma Platzi. Además, realizamos Streamings todos los sábados a las 6:00pm hora Colombia 🇨🇴 sobre desarrollo web o otros temas.</p>
            </div>
            <div className="about__newsletter">
                <h2>NEWSLETTER</h2>
                <p>Las novedades de HackTzi que no te puedes perder directamente en tu correo electrónico. Para registrarse, ingresa tu correo electrónico aquí.</p>
                <span>Email</span>
                <div className="about__newsletter--input">
                    <input type="text" placeholder="hello@world.com" />
                    <button>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default About
