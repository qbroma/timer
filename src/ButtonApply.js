import React from 'react';

function ButtonApply({ text }) {
    const style = {
        width: 180,
        height: 60,
        backgroundColor: '#F8D41A',
        marginLeft: 120,
    };
    const textStyle = {
        position: 'absolute',
        fontSize: 40,
        fontFamily: '"Roboto", arial',
        marginTop: 6,
        marginLeft: 36,
    };
    return (
        <div style={style}>
            <div style={textStyle}>{text}</div>
        </div>
    );
}

export default ButtonApply;