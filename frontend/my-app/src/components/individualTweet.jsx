import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import twitter from "./twitter.png";
    // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    // import { faTwitter } from '@fortawesome/free-brands-svg-icons'

let IndividualTweet = (props) => {
    // const element = <FontAwesomeIcon icon={faTwitter} />
    return (
        <div style={{display:'inline',fontSize:'1.5rem'}}>
            
            <Card style={{ width: '34rem', display:'inline-flex', fontSize:'1.4rem', margin:'30px' }}>
                <Card.Body>
                    <Card.Title style={{fontSize:"1.5rem"}}>Tweet 1<img src={twitter} alt="" srcset="" style={{margin:"0",float:"right"}}/></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{fontSize:'1.2rem'}}>@Tweets</Card.Subtitle>
                    <Card.Text>
                    {props.tweet}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                    <footer className="blockquote-footer" style={{textAlign:"right"}}>
                        2 <cite title="Source Title">Days ago </cite>
                    </footer>
                </Card.Body>
            </Card>
           
        </div>
    )
}

export default IndividualTweet;