import React from 'react';

function Buttons({ children }) {
    const style = {
        display: 'flex',
        flexDirection: 'row',
    };
    return (
        <div style={style}>
            {children}
        </div>
    );
}

export default Buttons;