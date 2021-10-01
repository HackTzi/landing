import React from 'react'
import Header from '../../components/Header/'
import About from '../../components/About/'
import CallToAction from '../../components/CallToAction'
import SocialButton from '../../components/SocialButtton'
import youtubeIcon from '../../assets/icons/youtube.svg'
import githubIcon from '../../assets/icons/github.svg'
import instagramIcon from '../../assets/icons/instagram.svg'
import twitterIcon from '../../assets/icons/twitter.svg'

import './style.scss'

function landing() {
    return (
        <div className="landing">
            <section className="landing__header">
                <Header />
            </section>
            <section className="landing__content">
                <About />
                <div className="landing__img">
                    <CallToAction />
                </div>
            </section>
            <section className="landing__footer">
                <SocialButton
                    icon={youtubeIcon}
                    description="youTube.com/hacktzi"
                ></SocialButton>
                <SocialButton
                    href="https://twitter.com/hacktzi"
                    icon={twitterIcon}
                    description="twitter.com/hacktzi"
                ></SocialButton>
                <SocialButton
                    href="https://instagram.com/hacktzi"
                    icon={instagramIcon}
                    description="instagram.com/hacktzi"
                ></SocialButton>
                <SocialButton
                    href="https://github.com/hacktzi"
                    icon={githubIcon}
                    description="github.com/hacktzi"
                ></SocialButton>
            </section>
        </div>
    )
}

export default landing
