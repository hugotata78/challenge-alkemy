import axios from 'axios'

export const CREATE_RECORD = 'CREATE_RECORD'
export const GET_RECORDS = 'GET_RECORDS'
export const GET_RECORD = 'GET_RECORD'
export const UPDATE_RECORD = 'UPDATE_RECORD'
export const DELETE_RECORD = 'DELETE_RECORD'
export const FILTER = 'FILTER'
export const ERROR = 'ERROR'
export const RESET = 'RESET'
const url='http://localhost:4000/api/record'

export const createRecordAction = (concept,amount,operation,date, categoryId, userId, token)=>{
    return async (dispatch)=>{
        try {
            const response = await axios.post(`${url}/create/${userId}`,{
                concept,
                amount,
                operation,
                date,
                categoryId:categoryId
            },{
                headers:{
                    'Authorization':  `Bearer ${token}`
                }
            })
            dispatch({
                type:CREATE_RECORD,
                payload:response.data
            })
        } catch (error) {
            dispatch(errorAction(error.message))
        }
    }
}

export const getRecordsAction = (userId,token)=>{
    return async (dispatch)=>{
        try {
            const response = await axios.get(`${url}/${userId}`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            })
            dispatch({
                type:GET_RECORDS,
                payload:response.data
            })
        } catch (error) {
            dispatch(errorAction(error.message))
        }
    }
}

export const getRecordAction = (id,token)=>{
    return async (dispatch)=>{
        try {
            const response = await axios.get(`${url}/view/${id}`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            })
            dispatch({
                type:GET_RECORD,
                payload:response.data
            })
        } catch (error) {
            dispatch(errorAction(error.message))
        }
    }
}

export const updateRecordAction = (concept,amount,operation,date,categoryId,id,token)=>{
    return async (dispatch)=>{
        console.log(id)
        try {
            const response = await axios.put(`${url}/update/${id}`,{
                concept,
                amount,
                operation,
                date,
                categoryId
            },{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            })
            console.log(response)
            dispatch({
                type:UPDATE_RECORD,
                payload:response.data
            })
        } catch (error) {
            dispatch(errorAction(error.message))
        }
    }
}

export const deleteRecordAction = (id,token)=>{
    return async (dispatch)=>{
        try {
            const response = await axios.delete(`${url}/delete/${id}`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            })
            dispatch({
                type:DELETE_RECORD,
                payload:response.data
            })
        } catch (error) {
           dispatch(errorAction(error.message))
        }
    }
}

export const recordFilterAction = (userId,categoryId,token)=>{
    return async (dispatch)=>{
        try {
            const response = await axios.get(`${url}/filter/${userId}/${categoryId}`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            })
            dispatch({
                type:FILTER,
                payload:response.data
            })
        } catch (error) {
            dispatch(errorAction(error.message))
        }
    }
}

export const errorAction = (error)=>{
    return {
        type:ERROR,
        payload:error
    }
}

export const resetState = ()=>{
    return {
        type: RESET
    }
}