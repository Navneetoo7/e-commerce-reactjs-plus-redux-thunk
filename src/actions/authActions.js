import axios from "axios";
import {SET_CURRENT_USER,ERRORS, SUCCESSFUL_REGISTER, FAILURE_REGISTER} from "./types"

export const setCurrentUser = user =>{
    return{
        type: SET_CURRENT_USER,
        payload :user,
    }
}

export const register =(userData)=> dispatch =>{
    const config = {
        headers:{
            "Content-type": "application/json"
        }
    }
    try{
        const res= axios.post("localhost:3001/api/users", userData, config)
        dispatch({
            type:SUCCESSFUL_REGISTER,
            payload:res.data
        })
    }catch(err){
        const error = err.response.data.errors;
        dispatch({
            type:ERRORS,
            payload:error
        })
    }
}