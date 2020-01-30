import React, { Component } from 'react'

export default class form3 extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            value:""
        }
     //  creating ref
        this.textInput=React.createRef();
    }
    componentDidMount=()=>{
            console.log(this.textInput.current);
            this.textInput.current.focus();
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.textInput.current.value);
        this.setState({value:this.textInput.current.value})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Uncontrolled Form</h2>
                    <h2>You typed Password : {this.state.value}</h2>
                <label>
                   Name:  <input type="text"   />
                </label>
                <br/><br/>
                <label>
                   Password:  <input type="text"  ref={this.textInput}  />
                </label>
                <br/><br/>
                <label>
                   Email:  <input type="text"   />
                </label>
                <br/><br/>
                <label>
                   Address:  <textarea type="text"  />
                </label>
                <br/>
                <br />
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
