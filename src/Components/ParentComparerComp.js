//This was created to just compare between PureComponent and Regular Component
import React, { Component } from 'react';
import PureComp from './PureComp';
import RegularComp from "./RegularComp";

class ParentComparerComp extends Component {
        constructor(props) {
        super(props)
            this.state = {
                name: "Augastine"
            };
        }

        componentDidMount(){
            setInterval(()=> {
                this.setState({
                    name: "Augastine"
                });

            }, 3000);
        }
    render() {
        console.log("Parent Component render");
        return (
            <div>
                This is the Parent_Comparer_Component
                <RegularComp name = {this.state.name} />
                <PureComp name = {this.state.name} />

            </div>
        );
    } 
}
export default ParentComparerComp;