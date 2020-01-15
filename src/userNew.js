import React, { Component } from 'react'

export default class userNew extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hello Anamika</h1>
                <button onClick={this.props.clickData}>Logout</button>
            </React.Fragment>
        )
    }
}
