import { SET_TOKEN, CLEAR_TOKEN } from '../actions/types'

export default function tokenReducer(state = '', action){
    switch (action.type) {
        case SET_TOKEN:
            return action.token
        case CLEAR_TOKEN:
            return '';
        default:
            return state;
    }
}
