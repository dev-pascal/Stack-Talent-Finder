import React from 'react'
import PropTypes from 'prop-types'

const RepoItem = ({ repo }) => {
  return (
    <div className='card-2'>
      <h3 className='space-between'>
        <div>
          Answer Score: {repo.score} {''}👍
        </div>
        <a href={'https://stackoverflow.com/a/' + repo.answer_id}>
          {' '}
          ➡️ Thread on Stack Overflow
        </a>
        <div>
          {' '}
          📅{' '}
          {Math.floor(
            [(Date.now() / 2592000000) * 12] -
              [(repo.creation_date / 2592000) * 12]
          )}{' '}
          days ago
        </div>
      </h3>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default RepoItem
