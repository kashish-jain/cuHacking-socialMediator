import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

let IndividualTweet = (props) => {
    return (
        <div style={{}}>
                    <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Tweet 1</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">@Tweets</Card.Subtitle>
                <Card.Text>
                {props.tweet}
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
        </div>
    )
}

export default IndividualTweet;