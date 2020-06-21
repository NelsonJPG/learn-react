import React, { Fragment, Component } from 'react';

class ComponentClassBinding extends Component {

    constructor(props){
        super(props);

        this.state = {
            message: 'Anonimous Message'
        }

        this.clickButtonBindConstruct = this.clickButtonBindConstruct.bind(this);
    }

    clickButtonWithoutBind() {
        alert("event not binding");
        console.log(this)
    }

    clickButtonBindDirect() {
       alert("event binding directly");
       this.setState({message: 'message passed by Button Bind Direct'})
       console.log(this)
    }
    
    clickButtonBindConstruct() {
        alert("event binding Constructor");
        this.setState({message: 'message passed by Button Bind Constructor'})
        console.log(this)
    }

    clickButtonCallFunction() {
        alert("event Call Function");
        this.setState({message: 'message passed by Button Call Function'})
        console.log(this)
    }

    clickButtonArrow = () => {
        alert("event Arrow Function");
        this.setState({message: 'message passed by Button Arrow Function'})
        console.log(this)
    }

    render () {
        return (
            <Fragment>
                <div className="grid-item">
                    <h2>Binding Event (Component Class)</h2>
                    <p>this examples is for see the context "this"</p>
                    <div>{this.state.message}</div>
                    <button onClick={this.clickButtonWithoutBind}>Click Without Bind (See this)</button>
                    <button onClick={this.clickButtonWithoutBind}>Click Without Bind (See this)</button>
                    <button onClick={this.clickButtonBindDirect.bind(this)}>Click Bind Direct (See this)</button>
                    <button onClick={this.clickButtonBindConstruct}>Click Bind Constructor (See this)</button>
                    <button onClick={() => this.clickButtonCallFunction()}>Click Bind Call Function (See this)</button>
                    <button onClick={this.clickButtonArrow}>Click Bind Arrow Function (See this)</button>
                </div>
            </Fragment>
        )
    }
}

export default ComponentClassBinding;
