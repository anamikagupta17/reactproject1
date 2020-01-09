import React, { Component } from 'react'

export default class unmount extends Component {
    componentDidMount()
    {
        console.log("ANA Mounted");
    }
    render() {
        console.log("ANA Render  ");
        return (
            <div>
            <h1>Hello Guys....@@@@@@@@@@@@@@@@</h1>    
            </div>
        )
    }
}
