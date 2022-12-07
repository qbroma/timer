import React from 'react';

function ChooseTime({ children }) {
    const style = {
        backgroundColor: '#FFFFFF',
        width: 750,
        height: 620,
        top: '+130px',
        left: '+585px',
        position: 'absolute',
        zIndex: '2',
        flexDirection: 'column',
    };
    return (
        <div style={style}>
            {children}
        </div>
    );
}

export default ChooseTime;