import { combineReducers } from 'redux'
import reducersAuth from './reducersAuth'

export default combineReducers({
    authentication: reducersAuth
})