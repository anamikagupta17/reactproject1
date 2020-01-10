import React from "react";
import ReactDOM from "react-dom";
//import Anamika from "./props";
//import Anamika from "./state";
//import elementjsx from "./jsx";
//import Anamika from "./app";
//import App2 from "./com";
//import Student from "./student";
//const ana=<h1>Hello Anamika</h1>;
// import Compose from "./composing";

// updating phase of lifecycle
//import New from "./new";

//import Main from './main'
//import Unmount from './unmount'

import Hooks from './hooks';


/* for element */
//ReactDOM.render(ana, document.getElementById('root'));

/*  component   */
//ReactDOM.render(<Anamika/>, document.getElementById('root'));

/* multiple parts using one component composing */
////ReactDOM.render(<App2/>, document.getElementById('root'));

/*  class Component  and funcion component  */
//ReactDOM.render(<Student name="Anmaika"/>, document.getElementById('root'));

/* for css  with jsx*/
//ReactDOM.render(elementjsx, document.getElementById('root'));

/* FOR PROPS */
//ReactDOM.render(<Anamika name="Anamika Gupta" roll="134731006" college="G.C.R.C. Group of Institution" >Child element {100+5}</Anamika>, document.getElementById('root'));

//ReactDOM.render(<Compose />, document.getElementById('root'));

//ReactDOM.render(<New    name="Anamika"/>, document.getElementById('root'));

//ReactDOM.render(<Main />, document.getElementById('root'));
//ReactDOM.render(<Unmount />, document.getElementById('ana'));
ReactDOM.render(<Hooks/>,document.getElementById('root'));