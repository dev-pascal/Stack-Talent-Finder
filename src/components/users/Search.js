import React, { useState, useContext } from 'react'
import GithubContext from '../../context/stack/stackContext'

const Search = () => {
    const { searchUsers, clearUsers } = useContext(GithubContext)
    const [text, setText] = useState('')
    const onChange = (e) => setText(e.target.value)
    const onSubmit = (e) => {
        e.preventDefault()
        if (text === '') {
            alert('Please Enter a Keyword')
        } else {
            searchUsers(text)
            setText('')
        }
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input
                    type="text"
                    name="text"
                    value={text}
                    placeholder="Find Stack Talents..."
                    onChange={onChange}
                />
                <div className="flex-buttons">
                    <input type="submit" value="Search" className="btn" />
                    <input
                        type="button"
                        className="btn"
                        value="Clear"
                        onClick={clearUsers}
                    />
                </div>
            </form>
        </div>
    )
}

export default Search
