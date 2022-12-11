import React from 'react';

const twoDigits = (number) => {
    if (number < 10) {
        return `0${number}`;
    }
    return number;
};

const ClockFace =({ clickHandler, totalSeconds }) => {
    const hours = Math.floor(totalSeconds /3600);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return (
        <div className="time" onClick={clickHandler}>
            {twoDigits(hours)}:{twoDigits(minutes)}:{twoDigits(seconds)}
        </div>
    );
}

export default ClockFace;