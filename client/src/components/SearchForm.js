import React, { Component } from 'react'
import { Results } from './Results'
import { connect } from 'react-redux'
import { getBusinesses } from '../actions/BusinessActions'

class SearchForm extends Component {
    constructor() {
        super()
        this.state = {
            term: "",
            location: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.getBusinesses(this.state)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit} id="search-form">
                <input onChange={this.handleChange} value={this.state.term} name="term" type="text" placeholder="Term"></input>
                <input onChange={this.handleChange} value={this.state.location} name="location" type="text" placeholder="Location"></input>
                <button type="submit">Send</button>
            </form>
            {/* <Results searchData={this.state.searchResults}/> */}
            </div>
        )
    }
}



export default connect(null, { getBusinesses })(SearchForm)

