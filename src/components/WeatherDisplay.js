import React from "react";

export class WeatherDisplay extends React.Component {
    render() {
        console.log(this.props);
        return (
            <main className="blur">
                <h3>Weather on {this.props.weatherData.date}</h3>
                <p>
                    The high was {this.props.weatherData.highTemp}°, with a low of {this.props.weatherData.lowTemp}°.
                    There was {this.props.weatherData.clouds}% cloud cover and the wind was blowing {this.props.weatherData.windDir.replace('-', ' ')}.
                </p>
            </main>
        );
    }
}

export default WeatherDisplay;