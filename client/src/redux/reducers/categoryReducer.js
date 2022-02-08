import { CATEGORIES } from "../actions/categoryActions"

const initialState = {
    categories:null
}

export const categoryReducer = (state=initialState,action)=>{
    switch(action.type){
        case CATEGORIES:
            return{
                ...state,
                categories:action.payload
            }
        default:
            return state
    }
}