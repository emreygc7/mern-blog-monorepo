import React, { createContext, ReducerAction, useReducer } from 'react'
import jwt_decode from 'jwt-decode'


interface IState {
    isAuth: boolean
}

let initialState = localStorage.getItem("token") ? {
    isAuth: true, 
    ...jwt_decode(localStorage.getItem("token") as string) as any
} : {
    isAuth: false,
}

export const userContext = createContext({
    state: initialState,
    dispatch: (action: ReducerAction<any>) => { },
})




const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            localStorage.setItem('token', action.payload)
            return {
                isAuth: true,
                ...jwt_decode(action.payload) as any
            }
        case "LOGOUT":
            localStorage.removeItem("token")
            return {
                isAuth: false,
            }
        default:
            return state
    }
}

const UserContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <userContext.Provider value={{ state, dispatch }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider