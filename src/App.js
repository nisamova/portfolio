import React from "react"
import HomePage from "./pages/HomePage"
import ArticlePage from "./pages/ArticlePage"
import PageNotFound from "./pages/PageNotFound"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/articles" component={ArticlePage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </>
  )
}
export default App

/**import logo from './logo.svg';
 * 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
