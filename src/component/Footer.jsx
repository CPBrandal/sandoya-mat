import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer
            style={{
                position: 'sticky',
                bottom: 0,
                width: '100%',
                backgroundColor: '#333',
                color: 'white',
                textAlign: 'center',
                padding: '10px 0',
            }}
        >
            &copy; 2024 Sandøya Mat. All rights reserved.
        </footer>
    );
}

export default Footer;
