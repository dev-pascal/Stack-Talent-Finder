import React, { useEffect, Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import GithubContext from '../../context/stack/stackContext'
import Spinner from '../styling/Spinner'
import Answers from './Answers'

const User = ({ match: { params } }) => {
    const {
        user: {
            display_name,
            profile_image,
            location,
            link,
            reputation,
            is_employee,
            website_url,
            accept_rate,
            creation_date,
        },
        loading,
        answers,
        getUser,
        getUserAnswers,
    } = useContext(GithubContext)

    useEffect(() => {
        getUser(params.user_id)
        getUserAnswers(params.user_id)
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <Spinner />
    } else
        return (
            <Fragment>
                <div className="card grid-4">
                    <div className="all-centre">
                        <img
                            src={profile_image}
                            alt=""
                            className="corner-img"
                            style={{ width: '150px' }}
                        />
                    </div>
                    <div>
                        <ul>
                            <li>
                                <br />
                                {display_name && (
                                    <Fragment>
                                        <strong>Name: {display_name} </strong>
                                    </Fragment>
                                )}
                            </li>
                            <li>
                                {website_url && (
                                    <Fragment>
                                        <strong>
                                            Website:{' '}
                                            <a href={website_url}>
                                                {website_url}
                                            </a>{' '}
                                        </strong>
                                    </Fragment>
                                )}
                            </li>
                            <li>
                                {location && (
                                    <Fragment>
                                        <strong>
                                            Location:{' '}
                                            <a href={location}>
                                                {location.toLocaleString('en')}
                                            </a>{' '}
                                        </strong>
                                    </Fragment>
                                )}
                            </li>
                        </ul>
                        <strong>
                            {is_employee ? (
                                <p>Work Status: Employee</p>
                            ) : (
                                <p>Work Status: Free</p>
                            )}
                        </strong>
                    </div>
                    <div>
                        <br />
                        <Fragment>
                            <span className="badge red">
                                Reputation:{' '}
                                {parseFloat(reputation).toLocaleString('en')}
                            </span>
                            <span className="badge green">
                                Acceptance Rate: {accept_rate || 0}
                            </span>
                            <span className="badge blue">
                                Member since:{' '}
                                {Math.floor(
                                    [Date.now() / 2592000000] -
                                        [creation_date / 2592000]
                                )}{' '}
                                months
                            </span>
                        </Fragment>
                    </div>
                    <div>
                        <br />
                        <a href={link} className="btn-3">
                            <span>Open Profile</span>
                        </a>
                    </div>
                </div>
                <Link to="/" className="btn-2">
                    <i class="fas fa-chevron-circle-left padding"></i>
                    Back to Search
                </Link>
                <Answers answers={answers} />
            </Fragment>
        )
}

export default User
