import { CREATE_USER, ERROR, LOGIN, LOGOUT } from "../actions/usersActions"

const initialState = {
    session:null,
    user:null,
    logout:null,
    error:null
}

export const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case LOGIN:
            return{
                session:action.payload,
                user:null,
                logout:null,
                error:null
            }
        case CREATE_USER:
            return{
                session:null,
                user:action.payload,
                logout:null,
                error:null
            }
        case LOGOUT:
            return{
                session:null,
                user:null,
                logout:action.payload,
                error:null
            }
        case ERROR:
            return{
                session:null,
                user:null,
                logout:null,
                error:action.payload
            }
        
        default:
            return state
    }
}