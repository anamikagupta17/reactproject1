import React, { Component } from 'react'
export default  class Inlinecss extends Component{
    state={
        change:false
    }
    clickHandle=()=>{
        this.setState({ change:true})
    }
    render()
    {
        const btnstyle={
            color:"black",
            backgroundColor:"yellow",
            fontSize:"30px"
        };
        const txtc={
            color:"blue"
        };
        const txts={
            fontSize:"50px"
        };
        if(this.state.change)
        {
            btnstyle.backgroundColor="gray";
        }
       
        return (
            <div>   
                <button style={btnstyle}> button</button>
                <h2>Two Object style in single line(with spread ...)</h2>
                <span style={{...txtc,...txts}}>Hello Dear...@@@@@@....</span>
                <span style={{...txtc,...{fontSize:"70px"}}}> <br/>Spread operator<br/></span>
                <button style={btnstyle} onClick={this.clickHandle}>Click Me...</button>
            </div>
        )
    }
   
}