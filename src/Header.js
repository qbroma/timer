import React from 'react';

function Header({ children }) {
    const style = {
        width: 750,
        height: 70,
        backgroundColor:'#F8D41A',
    };
    return (
        <div style={style}>{children}</div>
    );
}

export default Header;