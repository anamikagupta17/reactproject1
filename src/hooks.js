import  React,{ useState, useEffect } from 'react';

function Hooks(){
   const nameStateVariable= useState("Anamika");  // 1st method
   const name=nameStateVariable[0];
   const [namenew,SetNamenew]=useState("Adarsh") //2nd method
   const [roll ,setRoll]=useState(101);
   const [count,setCount]=useState(1);
   const [count1,setCount1]=useState(10);

   const changeValue=()=>{
    nameStateVariable[1]("Parul");
    SetNamenew("Shubham");
    setRoll(102);
   }

 const  increaseCount =()=>{
       setCount(count+1);
   }

   const decrementCount=()=>{
       setCount1(count1-1)
   }
   useEffect(()=>{
       console.log("useEffect function\n");
   },[count]);   // second parameter is optional and it is an array  add more value by comma count1,count2,....
   return (
   <React.Fragment>
       <h1>Hooks(with using this you can use state in function component)</h1>
       <h2>useEffect</h2>
   <h2>{nameStateVariable[0]} or {name}</h2>
   <h2>{namenew}</h2>
   <h2>{roll}</h2>
<button onClick={changeValue}>Change</button>
<h2>Count Up :{count}</h2>
<button type="button" onClick={increaseCount}> CountIncrement</button>

<h2>Count Down :{count1}</h2>
<button type="button" onClick={decrementCount}> CountDecrement</button>

<h2>useEffect(you can useEffect like componentDidMount ,componentDidUpdate in function Coponent for APi's or other work)</h2>

   </React.Fragment>);
}
export default Hooks;