import React, {Fragment} from 'react';


const ComponentHook = () => {
    const clickButton = () => {
        alert("my logic here");
    }

    return (
        <Fragment>
            <div className="grid-item">
                <h2>My First Hook (Logic)</h2>
                <p>Hooks are a new feature React (>= v16.7). This is same component functional but with stateful (use state and lifecycle)</p>
                <button onClick={clickButton}>Click Here</button>
            </div>
        </Fragment>
    );
}

export default ComponentHook;