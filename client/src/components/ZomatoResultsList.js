import React, { Component } from 'react'
import Business from './Business';

class ZomatoResultsList extends Component {
    constructor(props) {
        super()
    }
    render() {
        let results = this.props.data.map(business => <li><Business business={business}/></li>)
        
        return (
            <ol>
                {results}
            </ol>
        )
    }
}

export default ZomatoResultsList