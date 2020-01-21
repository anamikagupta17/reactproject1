import React, { Component } from 'react'
import New from "./new.jpg";
export default class Assets extends Component {
    render() {
        return (
            <div>
                <h1>Images</h1>
                <img src={process.env.PUBLIC_URL +"pic.jpg"} alt="My pic" width="30%" />
                <img src={New}  alt="New Image" width="30%"  style={{paddingLeft:"20px"}}/>
            </div>
        )
    }
}
