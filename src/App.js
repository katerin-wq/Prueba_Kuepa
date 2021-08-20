import React from 'react';
import './App.css';
import GlobalStyles from './GlobalStyles'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import home from '../src/components/home'

function App() {
  return (
  <div className="App">
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyles/>
      <Switch>
        <Route path="/" component={home}/>
      </Switch>
      </Router>
    </div>
  )
}
export default App;