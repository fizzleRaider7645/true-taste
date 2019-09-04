import * as types from '../actions/ActionTypes'
const initial = {results:[]}
export default (state = initial, action) => {
    switch(action.type) {
        case types.GET_BUSINESSES:
        return { ...state, results: action.payload};
        // case types.UPDATE_BALANCE:
        // return {...state, account: { balance: action.payload } }
        // case types.USER_LOGOUT:
        // return {};
        // case types.ACTUATE_TRANSACTION:
        //     return { ...state, transactions: [...state.transactions, action.payload] }
        default:
            return state;
    }
}