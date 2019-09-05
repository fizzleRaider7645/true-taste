import React, { Component } from "react";
import logo from "./logo.svg";
import Results from './components/Results'
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
                <header>
                    True Taste
                </header>
                <Results />
                <SearchForm />
            </div>
        );
    }
}

export default App;