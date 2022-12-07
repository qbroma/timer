import React from 'react';

function StatusBar({ children }) {
    const style = {
        backgroundColor: '#2F2F2F',
        width: 517,
        height: 30,
        marginTop: 38,
    };
    return (
        <div style={style}>
            {children}
        </div>
    );
}

export default StatusBar;