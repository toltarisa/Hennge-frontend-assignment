import React from 'react'
import '../styles/components/incomingbox.scss';
import { TableData } from '../utils/TableData';
import { Datepicker,Table,Card } from '../components';
import UpIcon from '../assets/icon_arrow01.svg';
export default function Incomingbox() {
    return (
        <div className="incoming-box">
            <div className="container">
                <div className="inbox-wrapper">
                <Datepicker whereTo=""/>
                <p className="notification-count">Results: <span className="zero">10</span> mail(s)</p>
                <Table />
                </div>
            </div>
            <div className="mobile-tab">
                    <div className="actions">
                        <p className="from">From<span><img src={UpIcon} alt="up-icon"/></span></p>
                        <p className="to">To</p>
                        <p className="subject">Subject</p>
                        <p className="date">Date</p>
                    </div>
                    <div />
            </div>
            {TableData.map((data,index) => (
                    <Card index={index} {...data}/>
            ))}
            </div>
    )
}
