import React, { Component,Fragment } from 'react';

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
export default Anamika;