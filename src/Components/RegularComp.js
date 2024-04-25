//this is a React.Component, the common or regularly used base for React components
import React, { Component } from 'react';

class RegularComp extends Component {
    render() {
        console.log("Regular Component render");
        return (
            <div>
                This is the Regular Component {this.props.name}
            </div>
        );
    }
}

export default RegularComp;