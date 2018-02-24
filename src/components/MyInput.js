import React, { Component } from 'react';

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
        return (<input value={this.state.value} onChange={this.handleChange}/>);
    }
}

export default MyInput;