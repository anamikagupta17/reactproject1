import React from "react";
import { Route,BrowserRouter as Router} from 'react-router-dom'
import App from './app';
import Home from './home';
import Condition from './condition';
import ConditionAnd from './conditionAnd'

import State from "./state";

import App2 from "./com";

import Compose from "./composing";
import Increment from "./increment";

import Assets from "./assets";
import Bootstrap from "./bootstrap";
import Modulecss from "./modulecss";
import Inlinecss from './inlinecss'
import Externalcss from './externalcss'

//updating phase of lifecycle
import New from "./new";

import Main from './main'
import Unmount from './unmount'
import Hooks from './hooks';


 // single input form
 import Form from "./form";

 // Multiple input form
 import Form2 from "./form2";

 // Uncontrolled  input form
import Form3 from "./form3";

//Context Api
import Contextapi1 from "./contextapi1";

// higher order component
 import Hoc from "./hoc";

 
// error bounderies
 import Errorboundries from "./Errorboundries";


const routing = (
    <Router>
      <div>
        <Route path="/" component={Home} />
        <Route path="/app" component={App} />
        <Route path="/condition" component={Condition} />
        <Route path="/conditionAnd" component={ConditionAnd} />
      
        <Route path="/state" component={State} />
        <Route path="/app2" component={App2} />
        <Route path="/compose" component={Compose} />
        <Route path="/Increment" component={Increment} />
        <Route path="/New" component={New} />
        <Route path="/Main" component={Main} />
        <Route path="/Unmount" component={Unmount} />
        <Route path="/Hooks" component={Hooks} />
        <Route path="/Form" component={Form} />
        <Route path="/Form2" component={Form2} />
        <Route path="/Form3" component={Form3} />
        <Route path="/Contextapi1" component={Contextapi1} />
        <Route path="/Hoc" component={Hoc} />
        <Route path="/Errorboundries" component={Errorboundries} />
        <Route path="/Inlinecss" component={Inlinecss} />
        <Route path="/Externalcss" component={Externalcss} />
        <Route path="/Modulecss" component={Modulecss} />
        <Route path="/Assets" component={Assets} />
        <Route path="/Bootstrap" component={Bootstrap} />
        

      </div>
    </Router>
  )

  export default routing;

