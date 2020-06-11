import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
   render() {
      return (
         <div>
         <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/app">App</Link></li>
          <li><Link to="/condition">condition</Link></li>
          <li><Link to="/conditionAnd">conditionAnd</Link></li>
          <li><Link to="/state">State</Link></li>
          <li><Link to="/app2">app2</Link></li>
          <li><Link to="/compose">compose</Link></li>
          <li><Link to="/Increment">Increment</Link></li>
          <li><Link to="/New">New</Link></li>
          <li><Link to="/Main">Main</Link></li>
          <li><Link to="/Unmount">Unmount</Link></li>
          <li><Link to="/Hooks">Hooks</Link></li>
          <li><Link to="/Form">Single Input Form</Link></li>
          <li><Link to="/Form2">Multiple Input Form</Link></li>
          <li><Link to="/Form3">Uncontrolled Form</Link></li>
          <li><Link to="/Contextapi1">Contextapi1</Link></li>
          <li><Link to="/Hoc">Hoc</Link></li>
          <li><Link to="/Errorboundries">Errorboundries</Link></li>
          <li><Link to="/Inlinecss">Inlinecss</Link></li>
          <li><Link to="/Externalcss">Externalcss</Link></li>
          <li><Link to="/Modulecss">Modulecss</Link></li>
          <li><Link to="/Assets">Assets</Link></li>
          <li><Link to="/Bootstrap">Bootstrap</Link></li>
         </ul>

        
         </div>
      )
   }
}
export default Home;





