import React, { Fragment, Component } from 'react';

class ComponentRegularClass extends Component {
    render() {
        console.log("Regular Component")
        return (
            <Fragment>      
                <h2>Component Regular</h2>
                <p>{this.props.name}</p>
            </Fragment>
        )
    }
}

export default ComponentRegularClass;