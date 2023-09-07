import React from 'react';
import { Menu } from "../Menu/Menu"
import CountdownTimer from '../Timer/CountdownTimer';
import { Scroll } from '../Scroll/Scroll';

export const Header = () => {
    const THREE_DAYS_IN_MS = 18 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    return (
        <div className='body_header'>
            <Menu/>
            <CountdownTimer targetDate={dateTimeAfterThreeDays} />
            <Scroll/>
        </div>
    )
}