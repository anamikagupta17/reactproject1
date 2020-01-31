import React, { Component } from 'react'
import Contextapi3 from "./contextapi3";
export default class Contextapi2 extends Component {
    render() {
        return (
            <div>
                <h3>Child Component</h3>
                <Contextapi3/>
            </div>
        )
    }
}
