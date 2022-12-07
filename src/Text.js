import React from 'react';

function Text({ text }) {
    const style = {
        position: 'absolute',
        margin: '0 auto',
        left: '+323px',
        top: '+8px',
        fontSize: 48,
        fontFamily: '"Roboto", arial',
    };
    return (
        <div style={style}>{text}</div>
    );
}

export default Text;