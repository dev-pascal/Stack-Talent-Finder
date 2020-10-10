import React from 'react'
import PropTypes from 'prop-types'

const AnswerItem = ({ answer }) => {
    return (
        <div className="card-2">
            <h3 className="space-between">
                <div>
                    Answer Score: {answer.score} {''}👍
                </div>
                <a href={'https://stackoverflow.com/a/' + answer.answer_id}>
                    {' '}
                    ➡️ See Thread on Stack Overflow
                </a>
                <div>
                    {' '}
                    📅{' '}
                    {Math.floor(
                        [(Date.now() / 2592000000) * 12] -
                            [(answer.creation_date / 2592000) * 12]
                    )}{' '}
                    days ago
                </div>
            </h3>
        </div>
    )
}

AnswerItem.propTypes = {
    answer: PropTypes.object.isRequired,
}

export default AnswerItem
