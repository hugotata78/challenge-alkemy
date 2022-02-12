import { CREATE_RECORD, DELETE_RECORD, ERROR, FILTER, GET_RECORD, GET_RECORDS, RESET, UPDATE_RECORD } from "../actions/recordsActions"

const initialState = {
    create_record:null,
    get_records:null,
    record:null,
    update_record:null,
    delete_record:null,
    error:null,
    filter:null
}

export const recordReducer = (state=initialState,action)=>{
    switch(action.type){
        case CREATE_RECORD:
            return{
                ...state,
                create_record:action.payload
            }
        case GET_RECORDS:
            return{
                ...state,
                get_records:action.payload
            }
        case GET_RECORD:
            return{
                ...state,
                record:action.payload
            }
        case UPDATE_RECORD:
            return{
                ...state,
                update_record:action.payload
            }
        case DELETE_RECORD:
            return{
                ...state,
                delete_record:action.payload
            }
        case FILTER:
            return{
                ...state,
                filter:action.payload
            }
        case ERROR:
            return{
                ...state,
                error:action.payload
            }
        case RESET:
            return{
                create_record:null,
                get_records:null,
                update_record:null,
                delete_record:null,
                error:null
            }
        default:
            return state
    }
}