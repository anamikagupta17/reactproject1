import React, { Component } from 'react'

export default class List extends Component {
    state={
        users:[
            {id:101,name:"Anamika",password:"fgerfdgdg"},
            {id:102,name:"Princi",password:"dfsfdfas"},
            {id:103,name:"Rakshita",password:"vcxbxb"}
        ]
    }
    render() {
        const arr=[11,12,13,14,15];
        const arrnum=this.props.numbers;
        const newArr=arr.map((num)=>{
        return <li>{num}</li>
        })
        console.log("Old Array" ,arr);
        console.log("New Array" ,newArr);
        const newUsers=this.state.users.map((user)=>{ console.log(user);
            return <h3>Id :{user.id}  Name : {user.name}  Password : {user.password}</h3>})
        return (
            <div>
                <h1>Normal Array</h1>
                <ul>
                     <li>{arr[0]}</li>
                     <li>{arr[1]}</li>
                     <li>{arr[2]}</li>
                     <li>{arr[3]}</li>
                     <li>{arr[4]}</li>
                </ul>
                <h1>With Map Array</h1>
                <ul type="square">
                    {newArr}
                </ul>
                <h1>Embaded map function</h1>
                <ul>
                     { arr.map( (numcurrent) =>{return <li>{numcurrent*5}</li> })}  
                </ul>
                <h1>Array with Props</h1>
                <ul>
                     { arrnum.map( (numcurrent) =>{return <li>{numcurrent*8}</li> })}  
                </ul>
                <h1>Array(list) with State </h1>
                <h3>Id : {this.state.users[0].id} Name: {this.state.users[0].name} Paasword : {this.state.users[0].password} </h3>
                <h3>Id : {this.state.users[1].id} Name: {this.state.users[1].name} Paasword : {this.state.users[1].password} </h3>
                <h3>Id : {this.state.users[2].id} Name: {this.state.users[2].name} Paasword : {this.state.users[2].password} </h3>
                <h1>Array(list)  State with map </h1>
                <div>{newUsers}</div>
            </div>
        )
    }
}
