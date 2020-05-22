import React from 'react'
import '../styles/components/main.scss';
import Logo from '../assets/logo.png';
import { Datepicker } from '../components';
export default function Emptybox() {
    return (
        <div className="empty-wrapper">
            <div className="container">
            <div className="elements-wrapper">
                <Datepicker whereTo="incoming"/>
                <p className="notification-count">Results: <span className="zero">0</span> mail(s)</p>
                <hr/>
                <div className="main-logo">
                    <img className="logo-center" src={Logo} alt="company-logo" />
                </div>
            </div>
            </div>
        </div>
    )
}
