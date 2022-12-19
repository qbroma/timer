import React from 'react';

const pad = (number) => number.toString().padStart(2, '0');

function ClockFace({ clickHandler, totalSeconds }) {
    const hours = pad(Math.floor(totalSeconds / 3600));
    const minutes = pad(Math.floor((totalSeconds / 60) % 60));
    const seconds = pad(Math.floor(totalSeconds % 60));

    return (
        <div className="time" onClick={clickHandler}>
            {hours}
            :
            {minutes}
            :
            {seconds}
        </div>
    );
}

export default ClockFace;
