import React, { Component } from 'react'
import Army from './withArmy'

 class Sonam extends Component {
    render() {
        return (
            <div>
                <h3>Sonam Componet</h3>
                <h4 onMouseOut={this.props.hochandleShots}>Sonam {this.props.hocguname} : {this.props.hocgunshots}</h4>
            </div>
        )
    }
}
export default Army(Sonam,5)