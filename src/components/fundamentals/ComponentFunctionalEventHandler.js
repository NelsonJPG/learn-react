import React from 'react';

const ComponentFuntionalEventHandler = (props) => {
    const functionClic = () => alert('clic Function')
    const callClic = () => alert('call Function')
    return (
        <div className="grid-item">
            <h2>Event Handler (Functional Component)</h2>
            <button onClick={functionClic} >Clic Handler Function </button>
            <button onClick={() => callClic()} >Clic Handler Call Function </button>
        </div>
    )
}

export default ComponentFuntionalEventHandler;