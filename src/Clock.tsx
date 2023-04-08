import React, {useEffect, useState} from 'react';

const Clock = () => {
    const [time, setTime] = useState('')

    useEffect(() => {
        setInterval(() => {
            const currentTime = new Date()
            const currenHour = currentTime.getHours() < 10 ? "0" + currentTime.getHours() : currentTime.getHours()
            const currentMinutes = currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes()
            const currentSeconds = currentTime.getSeconds() < 10 ? "0" + currentTime.getSeconds() : currentTime.getSeconds()
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