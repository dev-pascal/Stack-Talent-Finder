import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Alert from './components/styling/Alert'
import Banner from './components/styling/Banner'
import User from './components/users/User'
import StackState from './context/stack/stackState'
import AlertState from './context/alert/alertState'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import './App.css'

const App = () => {
    return (
        <StackState>
            <AlertState>
                <Router>
                    <div className="App">
                        <Banner />
                        <div className="Content">
                            <Alert />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route
                                    exact
                                    path={`/user/:user_id`}
                                    component={User}
                                />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </AlertState>
        </StackState>
    )
}

export default App
