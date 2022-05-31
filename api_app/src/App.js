import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    text: "bla",
    error: "",
  };

  handleDateChange = (e) => {
    const value = this.refs.number.value;

    fetch(`http://numbersapi.com/${value}/year?json`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <input onChange={this.handleDateChange} type="text" ref="number" />
        <p>Result: {this.state.text}</p>
      </>
    );
  }
}

export default App;
