import React ,{ useState  ,useEffect} from 'react'


 function Api() {
  const [apiData,setapidata]=useState("anamika");
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json()).then((res)=>{
     console.log(res);
    })
    },[])  
  return (
    <div>
        <h3>API</h3>
       <p>{ apiData }</p> 
    </div>
  )
}

export default Api;
