import React, { Component } from 'react'

export default class Form2 extends Component {
    state={
        name:"Anamika Gupta",
        password:"anamika123",
        email:"anamika@gmail.com",
        address:"Arjun Nagar Colony Gola dist-Kheri"
    }
    handleChange = e =>{
    //    console.log(e.target.name);   // name attribute get the name we can use any any attribute to get their value
      
    //this.setState({[e.target.name]:e.target.value})  if normal
      
    // if i want to inter password only in caps
        const value= e.target.name === "password" ? e.target.value.toUpperCase() : e.target.value;
        this.setState({[e.target.name]:value})
    }
    handleSubmit= e =>{
        console.log(e.target.name);   //e.target[0].value
        e.preventDefault();   // prevent default action of event
    }

    render() {
        return (
            <div>
                <h2>Multiple Input form contolled by React</h2>
                <form onSubmit={this.handleSubmit}>
                <label>
                   Name:  <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <br/><br/>
                <label>
                   Password:  <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                </label>
                <br/><br/>
                <label>
                   Email:  <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                </label>
                <br/><br/>
                <label>
                   Address:  <textarea type="text" name="address" value={this.state.address} onChange={this.handleChange}  />
                </label>
                <br/>
                <br />
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
