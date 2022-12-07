import React from 'react';

function Content({ children }) {
    const style = {
        display: 'flex',
        flexDirection: 'column',
        height: 290,
        width: 517,
        justifyContent: 'center',
    };
    return (
        <div style={style}>
            {children}
        </div>
    );
}

export default Content;