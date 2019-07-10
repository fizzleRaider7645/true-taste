import React, { Component } from "react";
import logo from "./logo.svg";
import TestForm from './TestForm'
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.json())
            .then(res => console.log(res))
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
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