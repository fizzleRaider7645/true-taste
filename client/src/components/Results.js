import React, {Component } from 'react';
import Business from './Business'
import { connect } from 'react-redux';

class Results extends Component {
    constructor(props) {
        super()
    }
    render() {
        let yelpResults;
        if(this.props.results.yelpData) {
            yelpResults = this.props.results.yelpData.businesses.map(b=> <Business key={b.id} business={b}/>)
        }
        return (
            <div id="results">
                <div id="yelp">
                    <header id='yelp-header'>
                    {this.props.results.search ? this.props.results.search.location : 'Yelp'}
                    </header>

                    <ul id="yelp-list">
                        {yelpResults}
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