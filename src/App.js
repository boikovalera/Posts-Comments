import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header'
import Posts from './components/Posts/Posts'
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="container">
        <Header></Header>
        <Switch>
          <Route path='/posts' component={Posts} />          
          <Route path='/' render={() => <Redirect to="/posts" />} />
        </Switch>
      </div>      
    </Router>
  );
}