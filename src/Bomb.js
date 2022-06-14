// your Bomb code here!
import React, { Component } from "react";

export default class Bomb extends Component {

    constructor(props){
        super()
        this.state = {
           secondsLeft: props.initialCount
        }
    }

    reduceCount = () => {
        this.setState({
            secondsLeft: this.state.secondsLeft - 1 
        })
    }

    countDown = () => {
        console.log(this.state.secondsLeft)
        const currentState = this.state.secondsLeft
        // setInterval(this.reduceCount, 1000)
        if(currentState > 0){
            return `${this.state.secondsLeft} seconds left before I go boom!`
        } else {
            return `Boom!`
        }
      

    }
    
    render(){
        console.log(this.props.initialCount)
        console.log(this.state.secondsLeft)
        return(
            <div initialCount={this.state.secondsLeft}>{this.countDown()}</div>
        )
    }
}