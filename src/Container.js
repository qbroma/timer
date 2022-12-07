import React from 'react';

function Container({ children }) {
    const styles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width: 1920,
        height: 974,
    };
    return (
        <div style={styles}>
            {children}
        </div>
    );
}

export default Container;