import React, { Component } from 'react'
import NewMark from "./newmarks.js";
export default class Mark extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            mroll:this.props.roll
        }
    }
        static getDerivedStateFromProps(props,state)
    {
        console.log("Get Derived  State from Props");
        console.log(props,state);
        if(props.roll!==state.mroll)
        {
            return {mroll: props.roll}
        }
        return null;
    }
    shouldComponentUpdate(nextprops,nextstate)
    {
        if(this.state.mroll < 134731010)
        {
            console.log("Mark- ShouldCompoment Updated")
            console.log(nextprops,nextstate);
            return true;
        }
        console.log(nextprops,nextstate);
        return false;
    }
    getSnapshotBeforeUpdate(prevprops,prevstate)
    {
        console.log("marks- GetSnapshotBeforeUpdate -It runs before update");
        console.log(prevprops,prevstate);
        return prevstate;
    }
    componentDidUpdate(prevprops,prevstate,snapshot)
    {
        console.log("Marks - ComponetDidUpdate- It runs after Update");
        console.log(prevprops,prevstate,snapshot);
    }

    render() {
        console.log("Marks- Rendered Child Of New");
        return (
            <div>
                <h1>Marks.Componet</h1>
                <NewMark/>
                <h3>{this.state.mroll}</h3>
            </div>
        )
    }
}
