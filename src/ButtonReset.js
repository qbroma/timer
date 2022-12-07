import React from 'react';

function ButtonReset({ text }) {
    const style = {
        backgroundColor: '#2F2F2F',
        width: 160,
        height: 70,
        marginLeft: 194,
        justifyContent: 'center',
    };
    const textStyle = {
        color: '#FFFFFF',
        fontSize: 24,
        fontFamily: '"Roboto", arial',
        width: 57,
        height: 29,
        marginLeft: 50,
        marginRight: 46,
        marginTop: 22,
        marginBottom: 22,
    };
    return (
        <div style={style}>
            <div style={textStyle}>{text}</div>
        </div>
    );
}

export default ButtonReset;