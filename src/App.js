import React from 'react';

class App extends React.Component {
  state = { // 반드시 컴포넌트 안에서 소문자 형태
    count: 0
  };

  add = () => {
    this.setState( current => ({
      count: current.count +1,
    }));
  };

  minus = () => {
    this.setState({ count: this.state.count-1 });
  };

  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;