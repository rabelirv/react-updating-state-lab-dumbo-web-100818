// Code DigitalClicker Component Here
import React from 'react'


class DigitalClicker extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      timesClicked: 0
    }
  }

    handleClick = ()=>{
      console.log(this.state.timesClicked);
      this.setState({
        timesClicked: this.state.timesClicked + 1
    })
  }

    render(){
      return <button onClick = {this.handleClick} name= {this.state.timesClicked}>{this.state.timesClicked}</button>
    }

}

export default DigitalClicker
