import React, { Component } from "react";
import logo from "./logo.svg";
// import TestForm from './TestForm'
import "./App.css";
import SearchForm from "./components/SearchForm";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    render() {
        return (
            <div className="App">
                <SearchForm />
            </div>
        );
    }
}

export default App;