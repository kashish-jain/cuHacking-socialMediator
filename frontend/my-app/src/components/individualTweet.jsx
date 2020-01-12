import React, { Component } from 'react';

let IndividualTweet = (props) => {
    return (
        <div style={{backgroundColor: "grey"}}>
            <h1 >
                {props.tweet}

            </h1>
        </div>
    )
}

export default IndividualTweet;