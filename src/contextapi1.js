import React, { Component } from 'react'
import Contextapi2 from "./contextapi2";
import { Providerr } from "./Context";
export const MyContext=React.createContext();

export default class Contextapi1 extends Component {
    state={
        name:"Anamika Guptaaa",
        value:10
    }

    handleClickContext =() =>{
        this.setState({value:this.state.value+2});
    }
    render() {
        const contextValues={
            dd:this.state,
            handleClick:this.handleClickContext
        }
        return (
            <div>
                <h2>Parent Component</h2>   
                {/* when there is multiple state thn pass only this.state for single this.state.statename */}
                <MyContext.Provider value={contextValues}>   
                     <Contextapi2/>
                </MyContext.Provider>

  {/*  work at a time you can use one of them */}
                {/* <h2>New Method Context </h2>
                <Providerr value={this.state.name}>
                        <Contextapi2/>
                </Providerr> */}
            </div>
        )
    }
}
