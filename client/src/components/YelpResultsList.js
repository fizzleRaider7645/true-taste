import React, { Component } from 'react'
import Business from './Business'

class YelpResultsList extends Component {
    constructor(props) {
        super()
    }
    render() {
        console.log(this.props.data)
        // let results = this.props.data.map(business => <li key={Math.random()}>{business.name}</li>)
        let results = this.props.data.map(business => <Business business={business}/>)

        
        return (
            <ol>
                {results}
            </ol>
        )
    }
}

export default YelpResultsList