import React, { Component } from 'react';
import SearchField from './components/SearchField/SearchField';
import WeatherChart from './components/WeatherChart/WeatherChart';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

class App extends Component {

    handleCity = (e) => {
        // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
        axios.get(`api.openweathermap.org/data/2.5/weather?q=London&appid=a7de7b4671f7e1618c95e50705e1db8c`)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    };
    handleCitySearch = (e) => {
        console.log(e.target.value)
        // if(e.target.value.length > 3)
        // axios.get(`api.openweathermap.org/data/2.5/forecast?q=London,uk&appid={bad46dfee1ae1125ec4faf31e63449de}`)
        //     .then(response => console.log(response))
        //     .catch(error => console.log(error))
    };


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <SearchField onChange={this.handleCitySearch} onClick={this.handleCity}/>
                    <WeatherChart />
                </header>
            </div>
        );
    }
}

export default App;
