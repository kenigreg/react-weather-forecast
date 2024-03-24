import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Header from './Header';
import { apiKey } from '../API';

function PortfolioContainer() {
    let queryURLWeather, queryURLForecast;

    //Getting user search term into state
    const [searchTerm, setSearchTerm] = useState('');

    //State for Current Weather
    const [searchData, setSearchData] = useState({
        results: [],
    });

    //State for Weather Forcast
    const [searchForecastData, setSearchForecastData] = useState({
        forecastResults: [],
    });

    // URL for API Call
    
    queryURLWeather = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}&units=metric`;
    
    queryURLForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=${apiKey}&units=metric`;


    //API request for current weather to openweather using Axios
    const fetchWeather = () => {
        axios.get(queryURLWeather).then((response) => {
            setSearchData({ results: response.data });

        })
            .catch(error => {
                console.log(error);
            });
       
    };

    useEffect(() => {
        fetchWeather();
    });

    
    //API request for forecast weather to openweather using Axios
    const fetchForecast = () => {
       axios.get(queryURLForecast).then((response) => {
        
            setSearchForecastData({ forecastResults: response.data });
        })
            .catch(error => {
                console.log(error);
            });
    };

   useEffect(() => {
        fetchForecast();
    });

    
    //Get search term from user input and set to state
    const handleChange = (event) => {
        const searchTerm = event.target.value;
        console.log(searchTerm);

        setSearchTerm(searchTerm);
    }

    //function to handle submiting user query
    const handleSubmit = (event) => {
        event.preventDefault();
        
            fetchWeather();
            fetchForecast();
    }


    return (
        <div>
            <NavBar
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                search={searchTerm}
                
            />
            <Header
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                search={searchTerm}
            />
        </div>

    )
}

export default PortfolioContainer;