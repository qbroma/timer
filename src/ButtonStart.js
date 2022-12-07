import React from 'react';

function ButtonStart({ children }) {
    const style = {
        backgroundColor: '#F8D41A',
        width: 160,
        height: 70,
        justifyContent: 'center',
    };
    const textStyle = {
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
            <div style={textStyle}>{children}</div>
        </div>
    );
}

export default ButtonStart;