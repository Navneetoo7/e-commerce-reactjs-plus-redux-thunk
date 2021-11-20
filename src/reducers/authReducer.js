import {SET_CURRENT_USER, SUCCESSFUL_REGISTER, ERRORS} from "../actions/types";
import { isEmpty} from "lodash";

const initialState = {
    isAuthenticated = false,
    token:localStorage.getItem("token"),
    user : {}
}
export default function( state = initialState, action){
    const {payload}= action
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user:payload
            }
        case SUCCESSFUL_REGISTER:
                localStorage.setItem("token", payload.token)
                return{
                    ...state,
                    ...payload,
                    isAuthenticated:true
                }
        case ERRORS:
            localStorage.removeItem("token")
            return{
                ...state,
                token:null,
                isAuthenticated:false
            }
            default:
                return state
    }
}
