import React, { Fragment, Component } from 'react';

class ComponentClassState extends Component {
    constructor(){
        super();
        this.state = {
            name: ""
        }
    }

    methodOnchange (event){
        this.setState({
            name: event.target.value
        })
    } // in the onchange onChange={(event) => this.methodOnchange(event)}

    methodOnchange2 = (event) => {
        this.setState({
            name: event.target.value
        })
    } // in the onchange onChange={this.methodOnchange2}

    render(){
        return (
            <Fragment>
                <div className="grid-item">
                    <h2>Component Class With State</h2>
                    <label>Name:</label>
                    <input name="name" onChange={(event) => this.methodOnchange(event)} value={this.state.name} />
                    <div><b>Result</b>:{this.state.name}</div>
                </div>
            </Fragment>
        )

    }
}

export default ComponentClassState;