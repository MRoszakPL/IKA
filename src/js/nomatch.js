import React, { Component } from 'react';

class NoMatch extends Component{

    render() {
        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '50rem'}}>
                <img alt="No Pass" src={'./images/nomatch.jpg'}/>
                <h2 style={{marginTop: '1rem', fontSize: '2rem', color: '#007bff'}}>Page is currently unavaible or doesn't exist</h2>
            </div>
        );
    }

};

export default NoMatch;