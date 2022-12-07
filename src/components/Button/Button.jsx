import React from 'react';

export const Button = ({ children }) => {
    return (
        <div style={style}>
            <div style={textStyle}>{children}</div>
        </div>
    );
}
