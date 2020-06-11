import React from 'react';
import useCustomFunction from './custom';

function Increment()
{
  const data=useCustomFunction();
  const data1=useCustomFunction();
  return(
    <React.Fragment>
<h1>Count up : {data.count}</h1>
<button onClick={data.handlecount} type="button">Incement</button>
<h1>Count up : {data1.count}</h1>
<button onClick={data1.handlecount} type="button">Incement</button>
    </React.Fragment>
  )
}
export default Increment;