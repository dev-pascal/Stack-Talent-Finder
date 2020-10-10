import React, { useReducer } from 'react'
import axios from 'axios'
import stackContext from './stackContext'
import stackReducer from './stackReducer'
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_ANSWERS,
} from '../types'

const StackState = (props) => {
    const initialState = {
        users: [],
        user: [],
        answers: [],
        loading: false,
    }
    const [state, dispatch] = useReducer(stackReducer, initialState)

    const searchUsers = async (text) => {
        setLoading()
        const res = await axios.get(
            `https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&inname=${text}&site=stackoverflow`
        )
        dispatch({ type: SEARCH_USERS, payload: res.data.items })
    }

    const getUser = async (user_id) => {
        setLoading()
        const res = await axios.get(
            `https://api.stackexchange.com/2.2/users/${user_id}?order=desc&sort=reputation&site=stackoverflow`
        )
        dispatch({ type: GET_USER, payload: res.data.items[0] })
    }

    const getUserAnswers = async (user_id) => {
        setLoading()
        const res = await axios.get(
            `https://api.stackexchange.com/2.2/users/${user_id}/answers?order=desc&sort=activity&site=stackoverflow`
        )
        dispatch({ type: GET_ANSWERS, payload: res.data.items })
    }

    const clearUsers = () => dispatch({ type: CLEAR_USERS })
    const setLoading = () => dispatch({ type: SET_LOADING })

    return (
        <stackContext.Provider
            value={{
                users: state.users,
                user: state.user,
                answers: state.answers,
                loading: state.loading,
                searchUsers,
                clearUsers,
                getUser,
                getUserAnswers,
            }}
        >
            {props.children}
        </stackContext.Provider>
    )
}

export default StackState
