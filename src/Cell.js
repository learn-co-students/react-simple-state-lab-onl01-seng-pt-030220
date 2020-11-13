import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    handleClick = (click) => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return(
            <div className="cell" 
            style={{backgroundColor: this.state.color}} //#FFF
            onClick={this.handleClick}>
            </div>
        )
    }
}