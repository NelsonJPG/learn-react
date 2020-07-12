import React, { Fragment, Component } from 'react';
import ComponentClassLifeCycleMountB from './ComponentClassLifeCycleMountB';

class ComponentClassLifeCycleMount extends Component {
    constructor(props){
        // this method is for to initialize the state, props and binding handler
        super(props)
        this.state = {
            name: "Nelson Gonzalez"
        }
        console.log("lifecycle constructor");
    }

    static getDerivedStateFromProps( props, state) {
        console.log("lifecycle getDerivedStateFromProps");
        // return state (object) or null... this method is used for pass props as initial params in the state.
        return null;
    }
    
    componentDidMount(){
        console.log("lifecycle componentDidMount");
    }
    
    shouldComponentUpdate(){
        console.log("lifecycle shouldComponentUpdate");
        return true;        
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("lifecycle getSnapshotBeforeUpdate");
        return null;
    }
    
    componentDidUpdate(){
        console.log("lifecycle componentDidUpdate");
    }

    changeState = () => {
        this.setState({
            name: "Jean Pierre"
        })
    }

    render(){
        console.log("lifecycle render");
        return(
            <Fragment>
                <div className="grid-item">
                    <h2>Component Class (Life Cycle)</h2>
                    <p>the render is used for display Jsx, read state and props</p>
                    <button onClick={this.changeState}>Clic Change State</button>
                    <ComponentClassLifeCycleMountB />
                </div>
            </Fragment>
        )
    }
}

export default ComponentClassLifeCycleMount;