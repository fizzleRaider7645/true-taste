import React, { Component } from 'react'

class YelpList extends Component {
    constructor(props) {
        super()
    }
    render() {
        let results;
        if(this.props.data) {
            results = this.props.data.businesses.map(business => <li key={Math.random()}>{business.name} - {business.location.address1}</li>)
        }
        return (
            <ol>
                {results}
            </ol>
        )
    }
}

export default YelpList
