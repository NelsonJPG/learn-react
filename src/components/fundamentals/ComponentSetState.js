import React, { Component, Fragment } from 'react';

class ComponentSetState extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        }
    }
    
    increment(){
        this.setState( prevState => ({
            counter: prevState.counter + 1
        }), 
        () => console.log("current state", this.state.counter)
        )
        console.log("old state", this.state.counter)
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    
    render(){
        return (
            <Fragment>
                <div className="grid-item">
                    <h2>SetState - PrevState</h2>
                    <h3>Counter: {this.state.counter}</h3>
                    <button onClick={() => this.increment()}>Increment +1</button>
                    <button style={{marginLeft: '10px'}} onClick={() => this.incrementFive()}>Increment +5</button>
                </div>
            </Fragment>
        )
    }
}

export default ComponentSetState;