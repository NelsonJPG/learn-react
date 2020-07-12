import React, { Component } from 'react';

class ComponentClassLifeCycleMountB extends Component {
    constructor(props){
        // this method is for to initialize the state, props and binding handler
        super(props)
        this.state = {
            name:  "Nelson Gonzalez"
        }
        console.log("lifecycle constructor B");
    }

    static getDerivedStateFromProps( props, state) {
        console.log("lifecycle getDerivedStateFromProps B");
        // return state or null
        return null;
    }
    
    componentDidMount(){
        console.log("lifecycle componentDidMount B");
    }

    shouldComponentUpdate(){
        console.log("lifecycle shouldComponentUpdate B");
        return true;        
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("lifecycle getSnapshotBeforeUpdate B");
        return null;
    }
    
    componentDidUpdate(){
        console.log("lifecycle componentDidUpdate B");
    }

    render(){
        console.log("lifecycle render B");
        return <h2>Component Class (Life Cycle B)</h2>
    }
}

export default ComponentClassLifeCycleMountB;