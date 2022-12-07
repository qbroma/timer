import React from 'react';

function Input(props) {
    const style = {
        backgroundColor: '#D9D9D9',
        borderRadius: 0,
        border: 0,
        marginLeft: 300,
        marginTop: 48,
        width: 400,
        height: 50,
        fontSize: 40,
        fontFamily: '"Roboto", arial',

    };
    return (
        <div>
            <input style={style}/>
        </div>
    );
}

export default Input;