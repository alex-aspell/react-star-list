import React, { Component } from 'react';

class NewStarForm extends Component {
    render(){
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input value={this.props.newStar.name} onChange={this.props.handleChangeFor('name')} placeholder="Name" />
                    <input value={this.props.newStar.diameter} onChange={this.props.handleChangeFor('diameter')} placeholder="Diameter" />
                    <input type="submit" value="submit new star" />
                </form>
            </div>
        )
    }
}

export default NewStarForm;