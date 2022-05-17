import React from 'react';
import classNames from 'classnames';
import styles from './styleData.css';

import {NavLink} from "react-router-dom";

const mapDates = ({date, className, onClick,textData}) => (

    <li key={date.unix()}  className={styles.navlink_a}>
        <NavLink to={'/schedule/?country=US&date='+textData}>
            <button className={className} onClick={onClick}>{date.format('D')}</button>
        </NavLink>
    </li>
);

const Days = ({shown, picked, onPick, setData,textData}) => {
    const days = shown
        .clone()
        .startOf('month')
        .startOf('week');

    const dates = [];

    while (dates.length < 42) {

        const date = days
            .clone()
            .add(dates.length, 'days');

        const className = classNames('date-picker__day', {
            'date-picker__day--out': !date.isSame(shown, 'month'),
            'date-picker__day--picked': date.isSame(picked, 'day'),
        });

        const onClick = () => {
            onPick(date)
            setData(date)
        };

        dates.push({date, className, onClick,textData});

    }
    return (
        <ul className="date-picker__days">
            {dates.map(mapDates)}
        </ul>
    );
};

export default Days;
