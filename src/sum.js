import React, { Component } from 'react'

export default class Form extends Component {
    state={
       num1:0,
       num2:0
    }

    handleChange = e=>{
        this.setState({[e.target.name]:e.target.value});
    }
    addNumbers=()=>{
        const num1=this.state.num1;
        const num2=this.state.num2;
        const sum=parseFloat(num1) + parseFloat(num2);
        this.setState({sum:sum});
    }
    render() {
        return (
            <div className="sumclass">
                <h2>Add Two Numbers </h2>
                <input type="text"   onChange={this.handleChange} name="num1"  /><br/><br/>
                <input type="text"   onChange={this.handleChange} name="num2"  /><br/><br/>
                <input type="text"   name="sum"  value={this.state.sum} readonly /><br/><br/>
                <button onClick={this.addNumbers }> Add</button>
            </div>
        )
    }
}
