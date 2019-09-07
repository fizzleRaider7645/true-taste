import * as types from './ActionTypes'

const setBusinesses = payload => {
    return {
        type: types.GET_BUSINESSES,
        payload
    }
}


export const getBusinesses = (searchFormState) => {
    return dispatch => {
        fetch("http://localhost:9000/search", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(searchFormState), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(businesses => {
            dispatch(setBusinesses(businesses))
        });
    }
}


const setBusiness = payload => {
    return {
        type: types.GET_BUSINESS,
        payload
    }
}

export const getBusiness = (businessData) => {
    return dispatch => {
        fetch(`http://localhost:9000/businesses/${businessData}`, {
            method: 'POST', // or 'PUT'
            // body: JSON({businessId: businessData}),
            headers:{
                // 'Authorization': 'Bearer rt6lfhSBGzZuHTOkC7EMF-e9RrWl-Zh0ipViu8IDDszuGHi83nhWZNIXeo6C3YPsT5E-Y8VId77gbQ8ci-v3IrgKOfWwXapQwUTDTxboVk8CFZ9y0-3A1WZ6n90dXXYx',
                'Content-Type': 'application/json'
            }
        })
        // .then(res => res.json())
        .then(res => console.log(res))
    }
}




