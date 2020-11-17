import React from 'react'
import Matrix from './Matrix';

class Cell extends React.Component {
    constructor(props) {
        super()
        this.state = { color: props.value
        }
    }

    handleClick = () => {
        this.setState({color: '#333'})
    }

    render() {
return (
        <div onClick={this.handleClick} className='cell' style={{backgroundColor: this.state.color}}>
            <p>?</p>
        </div>
)}
    
    
}


export default Cell