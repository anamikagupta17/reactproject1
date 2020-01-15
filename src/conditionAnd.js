import React, { Component } from 'react';
import UserPrime from "./userPrime";
export default class conditionAnd extends Component{
    render()
    {
        const primemember=this.props.primemember;
        return(
            <React.Fragment>
            <h1>Welcome user</h1>
        {primemember && < UserPrime />}
            </React.Fragment>
        )
        
    }
}