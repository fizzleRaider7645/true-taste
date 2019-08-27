import React, { Component } from 'react'

class ResultsList extends Component {
    constructor(props) {
        super()
    }
    render() {
        // console.log(this.props.data)
        let results = this.props.data.map(business => <li key={Math.random()}>{business.name}</li>)
        
        return (
            <ol>
                {results}
            </ol>
        )
    }
}

export default ResultsList
