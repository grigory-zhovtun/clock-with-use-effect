import React, {useEffect, useState} from 'react';

const Clock = () => {
    const [time, setTime] = useState('')

    const addZero = (num: number) => num < 10 ? "0" + num: num

    useEffect(() => {
        setInterval(() => {
            const currentTime = new Date()
            const currenHour = addZero(currentTime.getHours())
            const currentMinutes = addZero(currentTime.getMinutes())
            const currentSeconds = addZero(currentTime.getSeconds())
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