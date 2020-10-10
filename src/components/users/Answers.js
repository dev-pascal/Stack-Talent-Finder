import React from 'react'
import PropTypes from 'prop-types'
import AnswerItem from './AnswerItem'

const Answers = ({ answers }) => {
    return answers.map((answer) => (
        <AnswerItem answer={answer} key={answer.answer_id} />
    ))
}

Answers.propTypes = {
    answers: PropTypes.array.isRequired,
}

export default Answers
