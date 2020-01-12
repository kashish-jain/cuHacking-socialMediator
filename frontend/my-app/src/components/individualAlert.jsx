import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

let IndividualAlert = (props) => {
    return (
        <div style={{ display: 'inline', fontSize: '1.5rem' }}>

            <Card style={{ width: '34rem', display: 'inline-flex', fontSize: '1.4rem', margin: '30px' }}>
                <Card.Body>
                    <Card.Title style={{ fontSize: "1.5rem" }}>Tweet 1</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '1.2rem' }}>@Alerts</Card.Subtitle>
                    <Card.Text>
                        {props.alert}
                    </Card.Text>
                    <footer className="blockquote-footer" style={{ textAlign: "right" }}>
                    </footer>
                </Card.Body>
            </Card>

        </div>
    );
}

export default IndividualAlert;