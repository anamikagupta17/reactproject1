import React, { Component } from 'react';
import Mark from "./mark.js";

export default class New  extends Component{
    constructor(props)
    {
        super(props);
        console.log("New Constructor Called");
        console.log(props);
        this.state={
            roll:134731006
        }
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log("Get Derived  State from Props");
        console.log(props);
        console.log(state);
        return null;
    }
    componentDidMount()
    {
        // get data from server and set data into state
        console.log("App - ComponentDidMount is mounted");
    }
    handleClick=()=>{
        console.log("Button Clicked");
        // this.setState(
        //     {
        //         roll:102
        //     }
        // )
        this.setState({roll:this.state.roll+1})
    }
    render() {
        console.log("App rendered");
        return(
        <div>
              <h1>Hello Anamika !!!!!!!!!!!!!!!!.............</h1>
              <Mark     roll={this.state.roll} />
              <button onClick={this.handleClick}> Click Me</button>
        </div>)
       
    }
}
