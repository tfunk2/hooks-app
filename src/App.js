import React, { Component, useState } from 'react';
import './App.css';


function App() {

  const [count, setCount] = useState(0) // 0 represents the initial state, can be string, or array, etc.

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

// class App extends Component {

//   state = {
//     count: 0
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 })
//   }

//   decrement = () => {
//     this.setState({ count: this.state.count - 1 })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Counter App</h1>
//         <h2>{this.state.count}</h2>
//         <button onClick={increment}>-</button>
//         <button onClick={decrement}>+</button>
//       </div>
//     )
//   }
// }

export default App;
