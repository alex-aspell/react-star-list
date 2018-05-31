import React, { Component } from 'react';

class StarList extends Component {
    render() {
        return(
            <div>
                <ul>
                    {this.props.starList.map( (star,i) => <li key={i}>{star.name} {star.diameter}</li>)}
                </ul>
            </div>
        )
    }
}

export default StarList;