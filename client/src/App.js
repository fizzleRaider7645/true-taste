import React, { Component } from "react";
import logo from "./logo.svg";
import TestForm from './TestForm'
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    render() {
        return (
            <div className="App">
                <TestForm />
            </div>
        );
    }
}

export default App;