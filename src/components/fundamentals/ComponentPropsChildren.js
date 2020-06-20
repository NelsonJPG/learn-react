import React from 'react';

const ComponentPropsChildren = (props) => {
    return (
        <div className="grid-item">
            {props.children}
            <small>this component is used for to specify another component if not know</small>
        </div>
    )
}

export default ComponentPropsChildren;