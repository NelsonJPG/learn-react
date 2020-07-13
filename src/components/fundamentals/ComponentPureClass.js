import React, { Fragment, PureComponent } from 'react';

class PureComponentClass extends PureComponent {
    
    render() {
        console.log("Pure Component")
        return (
            <Fragment>      
                <h2>Component Pure</h2>
                <p>{this.props.name}</p>
            </Fragment>
        )
    }
}

export default PureComponentClass;