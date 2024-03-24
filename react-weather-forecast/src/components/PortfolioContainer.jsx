import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Header from './Header';
import { apiKey } from '../API';

function PortfolioContainer() {
    let queryURLWeather, queryURLForecast;
    //State for Current Weather
    const [searchData, setSearchData] = useState({
        search: '',
        results: [],
    });

    //State for Weather Forcast
    const [searchForecastData, setSearchForecastData] = useState({
        search2: '',
        forecastResults: [],
    });

    // URL for API Call
    
    queryURLWeather = `https://api.openweathermap.org/data/2.5/weather?q=${searchData.search}&appid=${apiKey}&units=metric`;
    
    queryURLForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${searchForecastData.search2}&appid=${apiKey}&units=metric`;


    //API request for current weather to openweather using Axios
    useEffect(() => {
        axios.get(queryURLWeather).then((response) => {
            console.log(response);
          setSearchData({...searchData, results: response.data});
        })
            .catch(error => {
            console.log(error);
          });
    }, [searchData, queryURLWeather]);


    //API request for forecast weather to openweather using Axios
    useEffect(() => {
        axios.get(queryURLForecast).then((response) => {
          setSearchForecastData({...searchForecastData, forecastResults: response.data});
        })
            .catch(error => {
            console.log(error);
          });
    }, [searchForecastData, queryURLForecast]);

    
    //Get search term from user input and set to state
    const handleChange = (event) => {
        const searchTerm = event.target.value;

        setSearchData({
            ...searchData,
            search: searchTerm,
        });

        setSearchForecastData({
            ...searchForecastData,
            search2: searchTerm,
        });
    }

    //function to handle submiting user query
    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <div>
            <NavBar
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                search={searchData.search}
                search2={searchForecastData.search2}
            />
            <Header
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                search={searchData.search}
                search2={searchForecastData.search2}
            />
        </div>

    )
}

export default PortfolioContainer;