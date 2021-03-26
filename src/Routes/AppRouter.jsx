import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GamePage from '../pages/GamePage'
import Login from '../pages/Login'
//import ScoreBoard from '../pages/ScoreBoard'



export default function AppRouter() {
    //disable the scoreboard in deploy while the page is writed
    //<Route path="/score" component={ScoreBoard} />
    return (
        <Router>
            <Switch>
                <Route path="/game" component={GamePage} />
                <Route path="/" component={Login} />
            </Switch>
        </Router>
    )
}
