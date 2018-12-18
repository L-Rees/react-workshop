import React, { Component } from 'react';
import Counter from '../components/Counter';
 
class App extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  increment = () => {
    // this.increment = this.increment.bind(this)
    this.setState({count: this.state.count + 1 });
  }
  decrement = () => {
    // this.increment = this.increment.bind(this)
    this.setState({count: this.state.count - 1 });
  }
  render() {
    return (
      <Counter 
          count = {this.state.count}
          decrement = {this.decrement}
          increment = {this.increment}
      />
    )
  }
}
export default App;