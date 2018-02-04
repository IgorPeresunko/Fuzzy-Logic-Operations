import React, { Component } from 'react'
import Main from '../Main'
import logo from './logo.svg'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to fuzzy logic</h1>
                </header>
                <p className="App-intro">
                    Made with love <span role="img" aria-label="emoji">😘</span> and React <span role="img" aria-label="emoji">😎</span>
                </p>
                <Main />
            </div>
        );
    }
}

export default App;
