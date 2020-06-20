import React, {Fragment} from 'react';

const ComponentFunctionalProps = (props) => {
    return (
        <Fragment>
            <div className="grid-item">
                <h2>hello {props.name}</h2>
                <p>This example pass a parameter in the Component Functional </p>
            </div>
        </Fragment>
    ) 
}

export default ComponentFunctionalProps;