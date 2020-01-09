import React, { Component } from 'react'

export default class Main extends Component {
    componentDidMount()
    {
        console.log("App Mounted");
    }
    componentWillUnmount()
    {
        console.log("App Unmounted  ");
    }
    render() {
        console.log("App Render  ");
        return (
            <div>
                <h1> Hello Component </h1>
            </div>
        )
    }
}
