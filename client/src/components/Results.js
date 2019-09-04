import React, {Component } from 'react'
import YelpResultsList from './YelpResultsList'
import { connect } from 'react-redux'
// import ZomatoResultsList from './ZomatoResultsList'
class Results extends Component {
    constructor(props) {
        super()
    }
    render() {
        let yelpSearchResultsList;
        // let zomatoSearchResultsList;
        if(this.props.searchData) {
            yelpSearchResultsList = <YelpResultsList data={this.props.searchData.yelpData.businesses}/>
            // zomatoSearchResultsList = <ZomatoResultsList data={this.props.searchData.zomatoData.restaurants}/>
            // yelpSearchResultsList = <ResultsList data={this.props.searchData.yelpData.businesses}/>
            // zomatoSearchResultsList = <ResultsList data={this.props.searchData.zomatoData.restaurants}/>
        }
        return (
            <div id="results">
                <div id="yelp">
                    <header id='yelp-header'>Yelp</header>
                    {/* {yelpSearchResultsList} */}
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