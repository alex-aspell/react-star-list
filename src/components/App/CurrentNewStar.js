import React, { Component } from 'react';

class CurrentNewStar extends Component {
    render(){
        return (
            <div>
                <h2>You're a star</h2>
                <p>New star is {this.props.newStar.name}</p>
            </div>
        )
    }
}

export default CurrentNewStar;