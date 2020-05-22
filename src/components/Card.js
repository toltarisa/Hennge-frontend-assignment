import React from 'react'
import { ClipSvg } from '../components';
import '../styles/components/card.scss';
import IconMail from '../assets/icon_mail_sp.svg';
import RightIcon from '../assets/icon_arrow02.svg';
export default function Card({from,to,subject,isPinned,date}) {
    
    return (
        <div className="card-wrapper">
            <div className="card-top">
                <div className="general-info">
                    <div className="tofrom-icon">
                        <img className="icon-mail-sp" src={IconMail} alt="icon-mail" />
                    </div>
                    <div className="tofrom-info">
                        <p className="text-bold">{from}</p>
                        <p>{to}</p>
                    </div>
                </div>
                <div className="date-info">
                    {isPinned ? (<ClipSvg />):null}
                    <p>{date}</p>
                    <img className="right-icon" src={RightIcon} alt="right-arrow" /> 
                </div>
            </div>
            <div className="card-body-info">
                <p>{subject}</p>
            </div>
        </div>
    )
}
