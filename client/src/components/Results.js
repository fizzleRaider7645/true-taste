import React, {Component } from 'react';
import Business from './Business'
import { connect } from 'react-redux';

class Results extends Component {
    constructor(props) {
        super()
    }
    render() {
        let yelpResults;
        console.log(this.props.results.yelpData)
        // if(this.props.results.yelpData.businesses) {
        //     yelpResults.map(business => {

        //     });
        // }
        return (
            <div id="results">
                <div id="yelp">
                    <header id='yelp-header'>Yelp</header>
                    <ul id="yelp-list">

                    </ul>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return ({
        ...state.search
    })
}

export default connect(mapStatetoProps, null)(Results)