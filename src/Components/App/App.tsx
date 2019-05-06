import React, { Component } from 'react';
import './App.css';
import RandomGenerator from '../RandomGenerator/';

class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="appHeader">
                    <h1>Nasa Random Picture Picker </h1>
                </header>
                <RandomGenerator />
            </div>
        );
    }
}

export default App;
