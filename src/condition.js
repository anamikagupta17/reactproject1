import React,{Component} from "react";
import User from "./user";
import Guest from  "./guest";


export default class Condition extends Component{
    render()
    {
        const isRegisterd=this.props.consumer;
        
        if(isRegisterd)
        {
            return < User/>;
           
        }
        return  < Guest/>;
        
    }
}