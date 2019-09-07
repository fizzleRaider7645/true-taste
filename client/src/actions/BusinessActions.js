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

export const getBusiness = (searchFormState) => {
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




