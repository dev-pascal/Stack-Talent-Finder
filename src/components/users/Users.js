import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../styling/Spinner'
import stackContext from '../../context/stack/stackContext'

const Users = () => {
    const { users, loading } = useContext(stackContext)
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="grid-4">
                {users.map((user) => (
                    <UserItem user={user} key={user.user_id} />
                ))}
            </div>
        )
    }
}

export default Users
