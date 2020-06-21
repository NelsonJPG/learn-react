import React, { Component } from 'react';

class ComponentClassEventHandler extends Component {
    functionClic(){
        alert('clic Function')
    }

    callClic (){
        alert('call Function')
    } 

    render() {
        return (
            <div className="grid-item">
                <h2>Event Handler (Functional Component)</h2>
                <button onClick={this.functionClic} >Clic Handler Function </button>
                <button onClick={() => this.callClic()} >Clic Handler Call Function </button>
            </div>
        )
    }
}

export default ComponentClassEventHandler;