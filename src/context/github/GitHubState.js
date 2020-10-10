import React, { useReducer } from 'react'
import axios from 'axios'
import GithubContext from './gitHubContext'
import githubReducer from './gitHubReducer'
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types'

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: [],
    repos: [],
    loading: false,
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)

  // search user
  const searchUsers = async (text) => {
    setLoading()
    const res = await axios.get(
      `https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&inname=${text}&site=stackoverflow`
    )
    dispatch({ type: SEARCH_USERS, payload: res.data.items })
  }

  // get user
  const getUser = async (user_id) => {
    setLoading()
    const res = await axios.get(
      `https://api.stackexchange.com/2.2/users/${user_id}?order=desc&sort=reputation&site=stackoverflow`
    )
    dispatch({ type: GET_USER, payload: res.data.items[0] })
    console.log(res.data.items[0])
  }

  // get users repos
  const getUserRepos = async (user_id) => {
    setLoading()
    const res = await axios.get(
      `https://api.stackexchange.com/2.2/users/${user_id}/answers?order=desc&sort=activity&site=stackoverflow`
    )
    dispatch({ type: GET_REPOS, payload: res.data.items })
    console.log(res)
  }

  // clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS })

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState
