import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'


import Header from './components/header'
import Home from './components/home'
import People from './components/people'

import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  render() {
      return (
              <BrowserRouter>
              <div>
              <div className="App">
              <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
              </div>
              
          
              <Header />
              <Route exact path='/' component={Home} />
              <Route path='/people' component={People} />
              </div>
              </div>
              </BrowserRouter>
              
    );
  }
}

export default App
