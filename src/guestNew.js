import React, { Component } from 'react'

export default class guestNew extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Welcome User</h1>
                <button onClick={this.props.clickData}>Login</button>
            </React.Fragment>
            
        )
    }
}
