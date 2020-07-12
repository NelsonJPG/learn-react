    import React, { Component } from 'react';

class ComponentClassConditionalRender extends Component {
    constructor (props) {
        super(props);

        this.state = {
            loggedin: false,
            user: "Guest"
        }

        this.baseState = this.state; 
    }

    login = () => {
        this.setState({
            loggedin: true,
            user:'NelsonJPG'
        });
    }

    logout = () => {
        this.setState(this.baseState);
    }
    
    render () {
        if(this.state.loggedin){
            return (        
                <div className="grid-item">
                    <h2>Render Conditional (Component Class)</h2>
                    <p> User ({this.state.user}) LoggedIn true.</p>
                    <button onClick={this.logout}>Logout</button>
                </div>
            )
        }
        return (        
            <div className="grid-item">
                 <h2>Render Conditional (Component Class)</h2>
                 <p> User ({this.state.user}) true LoggedIn false.</p>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default ComponentClassConditionalRender;