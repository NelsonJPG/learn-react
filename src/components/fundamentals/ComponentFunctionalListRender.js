import React, {Fragment} from 'react';

const ComponentFunctionalListRender = () => {
    let names = ["Nelson", "Jean Pierre", "González", "Hernandez"];
    const listNames = names.map( name => <li key={name}>{name}</li>);
    return (
        <Fragment>
            <div className="grid-item">
                <h2>Render List (Functional)</h2>
                <p>this component explain how to render a list</p>
                <ul>{listNames}</ul>
            </div>
        </Fragment>
    );
}

export default ComponentFunctionalListRender;