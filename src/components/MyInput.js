import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyInput extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: ""
        };
    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState( () => ({
            value,
        }));
    }

    render(){
        return (
            <div>
                <input value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.props.passedFunc}>submit</button>
            </div>
        );
    }
}

MyInput.propTypes = {
    passedFunc: PropTypes.func
}

export default MyInput;