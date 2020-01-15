import React, { Component } from 'react'
import UserNew from './userNew';
import GuestNew from './guestNew';

export default class conditionIfElse extends Component {
    state={
        isLoggedIn:false
    };
    handleLogin=()=>{
        this.setState({isLoggedIn:true});

    }
    handleLogout=()=>{
        this.setState({isLoggedIn:false});
    }
    render() {
        const isLoggedIn=this.state.isLoggedIn;
        // if(isLoggedIn)
        // {
        //     return <UserNew  clickData={this.handleLogout} />;
        // }
        // else{
        //     return <GuestNew clickData={this.handleLogin} />;
        // }

        // IIFE function called self(Automatic)

        return(
            <div>
                {
                    (
                        ()=>{
                            if(isLoggedIn)
        {
            return <UserNew  clickData={this.handleLogout} />;
        }
        else{
            return <GuestNew clickData={this.handleLogin} />;
        }

                        }
                    )()
                }
            </div>
        )
    }
}
