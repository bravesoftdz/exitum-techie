import { SET_TOKEN, CLEAR_TOKEN } from './types'

export const saveToken = (token) => {
    return {
        type: SET_TOKEN,
        token: token
    }
}

export const clearToken = () => {
    return {
        type: CLEAR_TOKEN
    }
}