import React, { Component } from "react";
import TriviaGame from "./TriviaGame";
import Header from "./Header";



export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <TriviaGame/>
      </div>
    );
  }
}
