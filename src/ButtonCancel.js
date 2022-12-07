import React from 'react';

function ButtonCancel({ text }) {
    const style = {
        width: 180,
        height: 60,
        backgroundColor: '#D9D9D9',
        marginLeft: 150,
    };
    const textStyle = {
        position: 'absolute',
        fontSize: 40,
        fontFamily: '"Roboto", arial',
        marginTop: 6,
        marginLeft: 24.5,
    };
    return (
        <div style={style}>
            <div style={textStyle}>{text}</div>
        </div>
    );
}

export default ButtonCancel;