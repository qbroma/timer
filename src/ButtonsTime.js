import React from 'react';

function ButtonsTime({ children }) {
    const style = {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 92,
    };
    return (
        <div style={style}>{children}</div>
    );
}

export default ButtonsTime;