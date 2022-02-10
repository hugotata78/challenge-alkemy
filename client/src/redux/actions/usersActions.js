import axios from 'axios'

export const LOGIN = 'LOGIN'
export const CREATE_USER = 'CREATE_USER'
export const LOGOUT = 'LOGOUT'
export const ERROR = 'ERROR'
const url = 'http://localhost:4000/api/user'

const saveStorage = (session) => {
    localStorage.storage = JSON.stringify(session)
}

export const restoreSession = () => {
    return (dispatch) => {
        const storage = localStorage.getItem('storage')
        const data = JSON.parse(storage)
        if (data && data.user) {
            dispatch({
                type: LOGIN,
                payload: data
            })
        }
    }
}

export const loginAction = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${url}/login`, {
                email,
                password
            })
            console.log(response.data)
            if (!response.data.results) {
                dispatch(errorAction(response.data.msg))
            } else {
                saveStorage(response.data.results)
                dispatch({
                    type: LOGIN,
                    payload: response.data.results
                })
            }
        } catch (error) {
            dispatch(errorAction(error.message))
        }
    }
}

export const createUserAction = (username, email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${url}/create`, {
                username,
                email,
                password
            })
            response.data.results ?
            dispatch({
                type: CREATE_USER,
                payload: response.data.results
            })
            :
            dispatch(errorAction(response.data.msg))
        } catch (error) {
            dispatch(errorAction(error.message))
        }
    }
}

export const logoutAction = (email, id) => {
    return async (dispatch) => {
        const response = axios.delete(`${url}/logout`, {
            email,
            id
        })
        localStorage.removeItem('storage')
        dispatch({
            type: LOGOUT,
            payload: response.data
        })
    }
}

export const errorAction = (data) => {
    return {
        type: ERROR,
        payload:data
    }
}

