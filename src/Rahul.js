import React, { Component } from 'react'
import Army from './withArmy'

 class Rahul extends Component {
    render() {
        return (
            <div>
                <h3>Rahul Componet</h3>
                 <h4 onMouseOver ={this.props.hochandleShots} >Rahul {this.props.hocguname} : {this.props.hocgunshots}</h4>
            </div>
        )
    }
}
export default Army(Rahul,10)