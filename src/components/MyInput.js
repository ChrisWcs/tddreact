import React, { Component } from 'react';

class MyInput extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: ""
        };
    }

    render(){
        return (<input value="" onChange={() => {}}/>);
    }
}

export default MyInput;