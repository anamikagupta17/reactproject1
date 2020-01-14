import {useState} from  'react';
function useCustomFunction()
{
    const[count,setCount]=useState(1);
    const handlecount=()=>{
        setCount(count+1);
    }
    return {
        count,
        handlecount
    }
}
export default useCustomFunction;
