import React, { Component } from 'react'
import "./app.css";
class Anamika extends Component{
    state={
        name:"Anamika",
        course:"B.Tech",
        roll:this.props.roll,
        child:this.props.children
    }
    render()
    {
        return (
        <div className="col">
        <h1>Hello {this.state.name} this is state and roll No {this.state.roll}</h1>
          {/*   use jsx children */}
        <h1>Child Element Of jsx with state : {this.state.child}</h1>
        </div>
         
    )
    }
}
export default Anamika
