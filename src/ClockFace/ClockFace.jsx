import React from 'react';

const pad = (number) => {
    if (number < 10) {
        return `0${number}`;
    }
    return number;
};

const ClockFace =({ clickHandler, totalSeconds }) => {
    const hours = pad(Math.floor(totalSeconds /3600));
    const minutes = pad(Math.floor(totalSeconds / 60));
    const seconds = pad(totalSeconds % 60);

    return (
        <div className="time" onClick={clickHandler}>
            {hours}:{minutes}:{seconds}
        </div>
    );
}

export default ClockFace;