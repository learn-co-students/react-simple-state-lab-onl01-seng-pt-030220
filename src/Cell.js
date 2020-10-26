import React, { Component } from 'react';


export default class Cell extends React.Component{


  constructor(prop){
      
      super()
      this.state = {
                     color: prop.value
                   }

  }

  handleClick=()=>{

     this.setState({
         
         color: '#333'
     })  
  }

  render(){
     return (
        <div className="cell" style={{backgroundColor: this.state.color}}  onClick={this.handleClick} > 
          
        </div>
     )
  }



}