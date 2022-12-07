import React from 'react';

function Inputs({ children }) {
    const style = {
        marginTop: 50,
    };
    return (
        <div style={style}>{children}</div>
    );
}

export default Inputs;