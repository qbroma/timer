import React from 'react';

function TextBeforeInput({ text }) {
    const style = {
        position: 'absolute',
        margin: '0 auto',
        fontSize: 48,
        fontFamily: '"Roboto", arial',
        marginTop: 50,
        marginLeft: 50,
    };
    return (
        <div style={style}>{text}</div>
    );
}

export default TextBeforeInput;