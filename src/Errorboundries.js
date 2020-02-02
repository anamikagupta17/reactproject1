import React, { Component } from 'react'
import Image from "./Image";
import Image1 from "./images/images1.jpg";
import Image2 from "./images/images2.jpg";
import Error from "./Error";

export default class Errorboundries extends Component {
    render() {
        return (
            <div>
                <Error>
                <Image imgname={Image1} /><br/>
                </Error>

                <Error>
                <Image imgname={Image2} /><br/>
                </Error>

                <Error> 
                <Image imgname="NoImage" /><br/>
                </Error>
            </div>
        )
    }
}
