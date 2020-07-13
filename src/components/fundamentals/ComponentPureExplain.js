import React, { Fragment,  Component } from 'react';
import ComponentPureClass from './ComponentPureClass';
import ComponentRegularClass from './ComponentRegularClass';
import ComponentFunctionalMemo from './ComponentFunctionalMemo';

class ComponentPureExplain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Nelson Parent"
        }
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({
                name: "Nelson Parent"
            })    
        }, 2000)
    }
    
    render(){
        console.log("parentExplain")
        return(
            <Fragment>
                <div className="grid-item">
                    <ComponentPureClass name={this.state.name} />
                    <ComponentRegularClass name={this.state.name} />
                    <ComponentFunctionalMemo name={this.state.name} />
                </div>
            </Fragment>
        )
    }
}

export default ComponentPureExplain;