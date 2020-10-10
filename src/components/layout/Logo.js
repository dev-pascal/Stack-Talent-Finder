import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Logo = ({ icon, title }) => {
  return (
    <div className='logo'>
      <Link to='/'>
        <i className={icon}> </i>
        <strong>{title}</strong>
      </Link>
    </div>
  )
}

Logo.defaultProps = {
  title: ' Stack Talent Search',
  icon: 'fab fa-stack-overflow',
}

Logo.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Logo
