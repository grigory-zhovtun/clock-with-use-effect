import React, {useEffect, useState} from 'react';

const Clock = () => {
    const [time, setTime] = useState('')

    useEffect(() => {
        setInterval(() => {
        const currentTime = new Date()
        const currenHour = currentTime.getHours()
        const currentMinutes = currentTime.getMinutes()
        const currentSeconds = currentTime.getSeconds()
        const newTime = currenHour + ":" + currentMinutes + ":" + currentSeconds
        setTime(newTime)
        }, 1000)
    }, [])

    return (
        <div>
            {time}
        </div>
    );
};

export default Clock;