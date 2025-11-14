import { Component } from 'react';

interface State {
  count: number;
}

class ClassComponent extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>클래스형 컴포넌트</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default ClassComponent;
