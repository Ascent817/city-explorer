import React from "react";
import './CityExplorer.css';
import axios from 'axios';
import CityDisplay from "./CityDisplay.js";
import ErrorDisplay from "./ErrorDisplay.js";
import WeatherDisplay from "./WeatherDisplay.js";

class CityExplorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            weatherData: null,
            city: '',
            error: ''
        };
    }

    handleSearchChange = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.city}&format=json`;

        try {
            let response = await axios.get(url);
            let weatherData = await axios.get(`https://city-explorer-server-ascent817.herokuapp.com/weather?searchQuery=${this.state.city}`);

            this.setState({
                data: response.data[0],
                error: '',
                weatherData: weatherData.data
            });
        } catch (error) {
            this.setState({
                error: error
            });
        }
    }

    render() {
        return (
            <>
                <form className="flex blur search" onSubmit={this.handleSubmit}>
                    <ion-icon name="search"></ion-icon>
                    <input className="search-input" type="text" onChange={this.handleSearchChange} />
                </form>
                {
                    (this.state.data && !this.state.error) &&
                    <CityDisplay data={this.state.data} />
                }
                {
                    this.state.error &&
                    <ErrorDisplay error={this.state.error.response.data.error} />
                }
                {
                    (this.state.weatherData && !this.state.error) &&
                    <>
                        {
                            this.state.weatherData.map((day) => {
                                return <WeatherDisplay key={day.date} date={day.date} highTemp={day.highTemp} lowTemp={day.lowTemp} clouds={day.clouds} windDir={day.windDir} />
                            })
                        }
                    </>
                }
            </>
        );
    }
}

export default CityExplorer;