import React, { Fragment, Component } from 'react';

class ComponentClasses extends Component {

    clickButton = () => {
        alert("my logic here");
    }

    render () {
        return (
            <Fragment>
                <div className="grid-item">
                    <h2>My First Component Class (Logic)</h2>
                    <p>This component that contain complex logic UI and cycle life.</p>
                    <button onClick={this.clickButton}>Click Here</button>
                </div>
            </Fragment>
        )
    }
}

export default ComponentClasses;
