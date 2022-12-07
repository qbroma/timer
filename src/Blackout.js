import React from 'react';

function Blackout({ children }) {
    const style = {
        position: 'absolute',
        zIndex: '1',
        backgroundColor: '#909090',
        width: 1920,
        height: 974,
    };
    return (
        <div style={style}>
            {children}
        </div>
    );
}

export default Blackout;