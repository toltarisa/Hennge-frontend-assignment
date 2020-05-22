import React from 'react'
import '../styles/components/datepicker.scss';
import calendarIcon from '../assets/icon_calender.svg';
import searchIcon from '../assets/icon_search.svg';
import { Link } from 'react-router-dom';
export default function Datepicker({whereTo}) {
    return (
        <div className="datepicker-wrapper">
            <div className="datepicker-select">
                <img className="calendar" src={calendarIcon} alt="calendar-icon"/>
                <p>2020/1/1 - 2020/1/</p>
            </div>
            <div className="datepicker-search">
               <Link to={whereTo}>
                    <img src={searchIcon} alt="search-icon" />
               </Link>
            </div> 
        </div>
    )
}
