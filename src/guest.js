import React,{Component} from "react";
export default class Guest extends Component{
    render()
    {
        return (
            <React.Fragment>
                <h1>Welecome Guest !!</h1>
                <button>Login</button>
                <button>Signup</button>
            </React.Fragment>
        );
    }
}