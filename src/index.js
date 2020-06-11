
import ReactDOM from "react-dom";
import routing from './routes';
import './index.css'


/* for element */
//const ana=<h1>Hello Anamika</h1>;
//ReactDOM.render(ana, document.getElementById('root'));

/*  component   */
//ReactDOM.render(<Anamika/>, document.getElementById('root'));

/* multiple parts using one component composing */
////ReactDOM.render(<App2/>, document.getElementById('root'));

/*  class Component  and funcion component  */
//ReactDOM.render(<Student name="Anmaika"/>, document.getElementById('root'));

/* for css  with jsx*/
//import elementjsx from "./jsx";
//ReactDOM.render(elementjsx, document.getElementById('root'));

/* FOR PROPS */
//import Props from "./props";
//ReactDOM.render(<Anamika name="Anamika Gupta" roll="134731006" college="G.C.R.C. Group of Institution" >Child element {100+5}</Anamika>, document.getElementById('root'));

//ReactDOM.render(<Compose />, document.getElementById('root'));

//ReactDOM.render(<New    name="Anamika"/>, document.getElementById('root'));

//ReactDOM.render(<Main />, document.getElementById('root'));
//ReactDOM.render(<Unmount />, document.getElementById('ana'));
//ReactDOM.render(<Hooks/>,document.getElementById('root'));

// for custom hooks
//ReactDOM.render(<App/>,document.getElementById('root'));

//  Conditional statement
//ReactDOM.render(<Condition  consumer={true}  />,document.getElementById("root"));

// inline condition
//ReactDOM.render(<ConditionAnd  primemember={true} />,document.getElementById("root"));


// import ConditionIfElse from './conditionIfElse';
// ReactDOM.render(<ConditionIfElse />,document.getElementById("root"));


// import List from './list';
// const arr=[11,12,13,14,15];
// ReactDOM.render(<List numbers={arr} />,document.getElementById("root"));



// import Inlinecss from './inlinecss'
// ReactDOM.render(<Inlinecss />,document.getElementById("root"));

// import Externalcss from './externalcss'
// ReactDOM.render(<Externalcss />,document.getElementById("root"));


// import Modulecss from "./modulecss";
// ReactDOM.render(<Modulecss />,document.getElementById("root"));



// import Assets from "./assets";
// ReactDOM.render(<Assets />,document.getElementById("root"));


// import Bootstrap from "./bootstrap";
// ReactDOM.render(<Bootstrap />,document.getElementById("root"));


// // single input form
// import Form from "./form";
// ReactDOM.render(<Form />,document.getElementById("root"));

// Multiple input form
// import Form2 from "./form2";
// ReactDOM.render(<Form2 />,document.getElementById("root"));




// // Uncontrolled  input form
// import Form3 from "./form3";
// ReactDOM.render(<Form3 />,document.getElementById("root"));



// Context Api
// import Contextapi1 from "./contextapi1";
// ReactDOM.render(<Contextapi1 />,document.getElementById("root"));

// higher order component
// import Hoc from "./hoc";
// ReactDOM.render(<Hoc />,document.getElementById("root"));

// error bounderies

// import Errorboundries from "./Errorboundries";
// ReactDOM.render(<Errorboundries />,document.getElementById("root"));

ReactDOM.render(routing,document.getElementById("root"));




