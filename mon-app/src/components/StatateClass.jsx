
import React, { Component } from 'react'

 class StatateClass extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         counter: 0
      }
    }
    addOne = () =>{
       this.setState({
        counter: this.state.counter + 1
       })
    }
    
  render() {
    return (
      <div>
       <p className='text-center'>{this.state.counter}</p>

       <div className='justify-content-center d-flex'><button onClick={this.addOne}> incrementer</button></div>
      </div>
    )
  }
}

export default StatateClass
