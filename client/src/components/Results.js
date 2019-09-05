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
            // this.props.results.yelpData.businesses.map(b=><li>{b.name}</li>)
            // yelpResults = this.props.yelpData.businesses[0].name
            // yelpResults = this.props.results.yelpData.businesses.map(b=> <li key={Math.random()}>{b.name}</li>)
            yelpResults = this.props.results.yelpData.businesses.map(b=> <Business key={b.id} business={b}/>)
            // yelpResults = <Business business={this.props.results.yelpData.businesses[0]}/>
        }
        return (
            <div id="results">
                <div id="yelp">
                    <header id='yelp-header'>Yelp</header>
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