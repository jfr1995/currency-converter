import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { stat } from "fs";

const App = () => (
  <Amount>
    {amount => (
      <div>
        <Pound amount={amount} />
        <Euro amount={amount} />
      </div>
    )}
  </Amount>
);

class Amount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ammount: 0
    };
  }

  onIncrement = () => {
    this.setState(state => ({ ammount: state.ammount + 1 }));
  };

  onDecrement = () => {
    this.setState(state => ({ ammount: state.ammount - 1 }));
  };

  render() {
    return (
      <div>
        <span>US Dollar: {this.state.ammount}</span>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        {this.props.children(this.state.ammount)}
      </div>
    );
  }
}

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;

const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

export default App;
