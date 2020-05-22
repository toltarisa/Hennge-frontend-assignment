import React from 'react'
import {TableData} from '../utils/TableData';
import '../styles/components/table.scss';
import {ClipSvg} from '.';
import UpIcon from '../assets/icon_arrow01.svg';
import { useHistory } from 'react-router-dom';
export default function Table() {
    const history = useHistory();
    const redirectTo = (url,data) => {
        history.push({pathname:url,search:'',state:data});
    }
    
    return (
        <div className="mobileDisappear">
            <table className="table">
                <thead className="thead-light">
                    <tr >
                        <th style={{width:'10%'}} className="col">From</th>
                        <th style={{width:'30%'}} className="col">To</th>
                        <th style={{width:'50%'}} className="col">Subject</th>
                        <th style={{width:'10%'}} className="col">Date<span><img src={UpIcon} alt="up-icon"/></span></th>
                    </tr>
                </thead>
                <tbody>
                    {TableData.map((row,index) => (
                        <tr onClick={() => redirectTo(`/detail/${row.id}`,row)} key={index}>
                            <td>{row.from}</td>
                            <td className="notification">{row.to}{row.notificationCount ? (<span className="notif-pill">{row.notificationCount}</span>):null}</td>
                            <td className="pin">{row.subject}{row.isPinned ? (<ClipSvg />):null}</td>
                            <th>{row.date}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
