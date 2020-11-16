import React from 'react'

class Cell extends React.Component {
    constructor() {
        super()
        this.state = {
            color: '#000'
        }
    }

    setState = () => {
        this.state.color = '#333'
    }

    render() {
return (
        <div onClick={this.setState} className='cell' style={{backgroundColor: this.state.color}}  >
            <p>testing testing</p>
        </div>
)}
    
    
}


export default Cell