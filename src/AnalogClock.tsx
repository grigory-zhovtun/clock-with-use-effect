import React, {useEffect, useState} from 'react';

import './AnalogClock.css'

const AnalogClock = () => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(intervalID)
    })

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const secondHandStyle = {
        transform: `rotate(${(seconds / 60) * 360}deg)`,
    };
    const minuteHandStyle = {
        transform: `rotate(${(minutes / 60) * 360}deg)`,
    };
    const hourHandStyle = {
        transform: `rotate(${(hours / 12) * 360}deg)`,
    };

    return (
        <div className="clock">
            <div className="hand second-hand" style={secondHandStyle} />
            <div className="hand minute-hand" style={minuteHandStyle} />
            <div className="hand hour-hand" style={hourHandStyle} />
            <div className="clock-center" />
        </div>
    );
};

export default AnalogClock;