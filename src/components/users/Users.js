import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/gitHubContext'

const Users = () => {
  const { users, loading } = useContext(GithubContext)
  if (loading) {
    return <Spinner />
  } else {
    return (
      <div className='grid-4'>
        {users.map((user) => (
          <UserItem user={user} key={user.user_id} />
        ))}
      </div>
    )
  }
}

export default Users
