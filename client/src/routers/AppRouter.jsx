import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LandingContainer, NotFoundContainer } from '../containers'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={LandingContainer}
        />
        <Route component={NotFoundContainer} />
      </Switch>
    </Router>
  )
}

export default AppRouter
