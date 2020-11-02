import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {color: props.value}
    }

    clickHandler = (event) =>{
        this.setState({color: '#333'})
    }
    
    render() {
        return (
            <div 
            style={{backgroundColor: this.state.color}}
            onClick={this.clickHandler}
            className="cell">
                {this.state.color}
            </div>
        );
    }
}

export default Cell;