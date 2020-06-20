import React, {Fragment, Component} from 'react';

class ComponentClassProps extends Component {
    render () {
        return (
            <Fragment>
                <div className="grid-item">
                    <h2>hello {this.props.name}</h2>
                    <p>This example pass a parameter in the Component Class </p>
                </div>
            </Fragment>
        ) 
    }
}

export default ComponentClassProps;