import React, {Component } from 'react'
import YelpList from './YelpList'

export class Results extends Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <div id="results">
                <div id="yelp">
                    <header id='yelp-header'>Yelp</header>
                    <YelpList data={this.props.searchData.yelpData}/>
                </div>
                
                <div id="zomato">
                <header id='zomato-header'>Zomato</header>
                </div>
            </div>
        )
    }
}
