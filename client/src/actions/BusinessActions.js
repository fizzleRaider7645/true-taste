// import { API_URL } from './ApiUrl'
// import Auth from '../modules/Auth'
import * as types from './ActionTypes'

// /* Action Action Creator - CLEARS REDUX STORE AFTER LOGOUT */
// export const unsetUser = payload => {
//     return dispatch => {
//         dispatch({ type: types.USER_LOGOUT })
//     }
// }

// /* Action Action Creator - GET USER WHEN USER COMPONENT MOUNTS*/
// const setUser = payload => {
//     return {
//         type: types.GET_USER,
//         payload
//     }
// }

// /* GET USER */
// export const getUser = () => {
//     return dispatch => {
//         return fetch(`${ API_URL }/account`, {
//             method: 'GET',
//             headers: {
//               token: Auth.getToken(),
//               'Authorization': `Token ${Auth.getToken()}`
//             }
//         }).then(res => res.json()).then(user => {
//             dispatch(setUser(user))
//         })
//     }
// }

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




