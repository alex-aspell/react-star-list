import React, { Component } from 'react';

class PlanetList extends Component {
    render(){
        return (
            <div>
                <ul>
                    {this.props.planetList.map((planet, i) => <li key={i}>The diameter of the planet {planet.name} is {planet.diameter} kms</li> )}
                </ul>
            </div>
        )
    }
}



export default PlanetList;