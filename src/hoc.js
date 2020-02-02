import React, { Component } from 'react'
import Rahul from "./Rahul";
import Sonam from "./Sonam"
export default class Hoc extends Component {
    render() {
        return (
            <div>
                <h2>Higher Order Componet(HOC)</h2>
                <Rahul />
                <Sonam />
            </div>
        )
    }
}
