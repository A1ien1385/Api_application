import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    text: "Set new date",
    error: "",
  };

  handleDateChange = (e) => {
    const value = this.refs.number.value;

    fetch(`http://numbersapi.com/${value}/year?json`)
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw Error(res.status);
      })
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          text: data.text,
        })
      )
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
