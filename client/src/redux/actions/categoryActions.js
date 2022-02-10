import axios from 'axios'

export const CATEGORIES = 'CATEGORIES'


export const categoryActions = ()=>{
    return async (dispatch)=>{
        try {
            const response = await axios.get('http://localhost:4000/api/categories')
            dispatch({
                type:CATEGORIES,
                payload:response.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}