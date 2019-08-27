import React from 'react'
import YelpList from './YelpList'

export const Results = props => {
    return (
        <div id="results">
            <div id="yelp">
                <header id='yelp-header'>Yelp</header>
                <YelpList />
            </div>
            
            <div id="zomato">
            <header id='zomato-header'>Zomato</header>
            </div>
        </div>
    )
}
