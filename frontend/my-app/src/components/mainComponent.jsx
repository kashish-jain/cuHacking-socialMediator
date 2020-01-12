import React, { Component } from 'react';
import TwitterCharts from './twitterCharts';

class MainComponent extends Component {
    render() {
        return (
            <div>
                Hi there how is it going
                <TwitterCharts/>
            </div>
        );
    }
}

export default MainComponent;