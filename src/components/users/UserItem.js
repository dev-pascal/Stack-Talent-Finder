import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const he = require('he')

const UserItem = ({
  user: {
    display_name,
    profile_image,
    user_id,
    location,
    reputation,
    is_employee,
  },
}) => {
  return (
    <div className='card text-center'>
      <img
        src={profile_image}
        className='round-img'
        style={{ width: '100px' }}
        alt=''
      />
      <h3>{he.decode(display_name)}</h3>
      <h4>{location}</h4>
      <h4>{parseFloat(reputation).toLocaleString('en')}</h4>
      {is_employee ? (
        <i class='far fa-briefcase'></i>
      ) : (
        <i class='fas fa-comments'></i>
      )}
      <div>
        <Link to={`/user/${user_id}`} className='btn-2'>
          More
        </Link>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
