import React, { Component } from 'react'
import { MyContext } from "./contextapi1";
//import{ Consumerr } from "./Context";
export default class Contextapi3 extends Component {
   // static contextType = MyContext;    //contexttype access by context keyword
    render() {
       // console.log(this.context);
        return (
            <div>
                <MyContext.Consumer>
                    {
                        ({dd,handleClick})=>(
                        <div>
                        <h4>Name : {dd.name}</h4>   {/* receive with same name as define in provider when multiple value*/}
                        <h4>Value: {dd.value}</h4> {/* in data that given values is received if there is multiple value then you can acess data.valuename */}
                        <button onClick={handleClick}>Click Me</button>
                        </div>
                    )}
                </MyContext.Consumer>

                {/* <h2>New method to recive context value</h2>
                <Consumerr>
                    {
                        value =><h6>{value}</h6>
                    }
                </Consumerr> */}

                {/* <div>
                    <h2>Name : {this.context.dd.name}</h2>
                    </div> */}
            </div>
        )
    }
}
