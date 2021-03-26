import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GamePage from '../pages/GamePage'
import Login from '../pages/Login'
import ScoreBoard from '../pages/ScoreBoard'



export default function AppRouter() {
    return (
        <Router>
            <Switch>
            <Route path="/score" component={ScoreBoard} />
                <Route path="/game" component={GamePage} />
                <Route path="/" component={Login} />
            </Switch>
        </Router>
    )
}
