import React  from 'react';
import SearchField from './components/SearchField/SearchField';
import WeatherChart from './components/WeatherChart/WeatherChart';

import logo from './logo.svg';
import './App.css';

const App = () => {

    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <SearchField />
                <WeatherChart />
            </div>
        </div>
    );
};

export default App;
