import React, { Component } from 'react';
import './App.css';
import RandomGenerator from '../RandomGenerator/randomGenerator.component';

class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="appHeader">
                    <h1>Planet-Saver</h1>
                </header>
                <RandomGenerator />
            </div>
        );
    }
}

export default App;
