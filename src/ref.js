import React, { Component } from 'react'

export default class ref extends Component {
    constructor(props)
    {
        super(props);
        this.callbackRef=null;
        this.setRef=element =>{
            this.callbackRef=element;
        }
    }
    componentDidMount= () =>{
        this.callbackRef.focus();
    }
    render() {
        return (
            <div>
                <form>
                    <h2>Callback ref</h2>
                    <label>
                   Name:  <input type="text"   />
                </label>
                <br/><br/>
                <label>
                   Password:  <input type="text"  />
                </label>
                <br/><br/>
                <label>
                   Email:  <input type="text"   />
                </label>
                <br/><br/>
                <label>
                   Address:  <textarea type="text"   ref={this.setRef}  />
                </label>
                <br/>
                <br />
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
