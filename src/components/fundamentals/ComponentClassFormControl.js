import React, { Fragment, Component } from 'react';

class ComponentClassFormControl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            comments: "",
            country: ""
        } 
    }

    handleFnameChange = event => {
        this.setState({
            fname: event.target.value
        })
    }

    handleLnameChange = event => {
        this.setState({
            lname: event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleCountryChange = event => {
        this.setState({
            country: event.target.value
        })
    }

    handleSubmit = event => {
        console.log("submit handle", event, this.state)
        event.preventDefault();
    }

    render(){
        return (
            <Fragment>
                <div className="grid-item">
                    <h2>Component Class Form Controlled</h2>   
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Firstname: </label>
                            <input name="fname" onChange={this.handleFnameChange} value={this.state.fname} />
                            {this.state.fname}
                        </div>
                        <div>
                            <label>Lastname: </label>
                            <input name="lname" onChange={this.handleLnameChange} value={this.state.lname} />
                            {this.state.lname}
                        </div>
                        <div>
                            <label>Comments: </label>
                            <textarea name="comments" onChange={this.handleCommentsChange} value={this.state.comments}></textarea>
                            {this.state.comments}
                        </div>
                        <div>
                            <label>Country: </label>
                            <select name="country" onChange={this.handleCountryChange}>
                                <option value="">Select...</option>
                                <option value="BR">Brasil</option>
                                <option value="CO">Colombia</option>
                                <option value="VE">Venezuela</option>
                            </select>
                            {this.state.country}
                        </div>
                        <button type="submit">Send</button>
                    </form>  
                </div>
            </Fragment>
        )
    }
}

export default ComponentClassFormControl;