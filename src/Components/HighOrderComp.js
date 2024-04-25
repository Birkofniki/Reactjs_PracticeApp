//this is a high order component in react, it allows the reusability of a component
import React from "react"

const UpdatedComp= OriginalComp => {
    class NewComp extends React.Component{
       render(){
        return  <OriginalComp name = "The User" />;

       } 
    }
    return NewComp;
}

export default UpdatedComp;
// for instance we have re-used the UpdatedComp here in both "ClickComp.js" and "CounterComp.js"