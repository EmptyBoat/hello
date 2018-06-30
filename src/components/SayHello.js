import React, { Component } from 'react';

class SayHello extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
        <div>
        <h1>Hello !! {this.props.name}</h1>
        <h1>Age {this.props.age}</h1>
        </div>
        );
    }
}

export default SayHello;