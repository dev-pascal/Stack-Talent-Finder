import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Banner = ({ icon, title }) => {
    return (
        <div className="banner">
            <Link to="/">
                <i className={icon}> </i>
                <strong>{title}</strong>
            </Link>
        </div>
    )
}

Banner.defaultProps = {
    title: ' Stack Talent Finder',
    icon: 'fab fa-stack-overflow',
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default Banner
