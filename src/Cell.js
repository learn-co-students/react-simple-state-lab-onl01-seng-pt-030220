import React, { Component } from 'react';


export default class Cell extends React.Component{


  constructor(prop){
      
      super()
      this.state = {
                     color: prop.value
                   }
    console.log(`this.state`,this.state)

  }

  getCell=()=>{

     this.setState({
         
                color: '#333'
    })  
   console.log(`color`,this.setState)
  }

  render(){
     return (
        <div className="cell" style={{backgroundColor: this.state.color}}  onClick={this.getCell} > 
          
        </div>
     )
  }



}