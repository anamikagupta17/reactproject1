import React from "react";
import Pt from "prop-types"
import "./app.css";

function Anamika(props) //place of props you can use any word
{
return (
    <div className="col">
        <h1>Hello Example of Props</h1>
        <h1> 1. Name : { props.name}</h1>
        <h1> 2. Roll Number : { props.roll}</h1>
        <h1> 3. College : { props.college}</h1>
        {/*   use jsx children */}
        <h1> 3. Child Element Of jsx : { props.children}</h1>
    </div>
);
};
Anamika.propTypes={
    name: Pt.string.isRequired
};
Anamika.defaultProps={
    name :" Parul Gupta"
}
export default Anamika;