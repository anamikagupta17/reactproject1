import React, { Component } from 'react'

export default class Form extends Component {
    state={
        //value:"Anamika Gupta",
        value:"textarea Value to check react form text areea feild"
    }
    handleChange = e=>{
        this.setState({
            value:e.target.value.toUpperCase(),  //.substr(0,34) for limit words
        });
    }
    render() {
        return (
            <div>
                <h2>Controlled by React</h2>
                <form>
                {/* <input type="text"  value={this.state.value} onChange={this.handleChange}  /><br/><br/> */}
                <textarea  value={this.state.value} onChange={this.handleChange}     />
                </form>
               
            </div>
        )
    }
}
