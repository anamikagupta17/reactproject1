import React, { Component,Fragment } from 'react';
import useCustomFunction from './custom';

//let ana=<h1> Hello Anamika!</h1>;

class Anamika extends Component {
    render() {
      //return <h2>Hello Anamika Again  by Component!</h2>;  // for single element
      //return React.createElement("h1", null, " Hello Anamika!");
      // for Multipe Element
      return (
        //   <div>
        //       <h1>Hello Anamika this is Multiple Line element.</h1>
        //       <h2>Hello Anamika @@@@......</h2>
        //   </div>
    //     <React.Fragment>
    //        <h1>Hello Anamika this is Multiple Line element by <code>React.Fragment</code></h1>
    //        <h2>Hello Anamika @@@@......</h2>
    //    </React.Fragment>
        <Fragment>
        <h1>Hello Anamika this is Multiple Line element by <code>Fragment</code></h1>
        <h2>Hello Anamika @@@@......</h2>
        <h3>Hello Anamika2 @@@@......</h3>
       </Fragment>
      );
    }
  }


function App()
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
//export default Anamika;
export default App;