import React from 'react';

function Time({ text }) {
    const textStyle = {
        fontSize: 133.5,
        fontFamily: '"Roboto", arial',
    };
    const style = {
        height: 145,
        width: 517,
    }
    return (
        <div style={style}>
            <div style={textStyle}>{text}</div>
        </div>
    );
}

export default Time;