import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        if(this.props.imgname === "NoImage")
        {
            throw new Error("Image Not Found");
        }
        return <img  src={this.props.imgname} style={{height:"20%",width:"20%"}} alt="Baby Images" />  ;
           
    }
}
