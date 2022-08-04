import React from "react";

export class WeatherDisplay extends React.Component {
    render() {
        return (
            <main className="blur">
                <h3>Weather on {this.props.date}</h3>
                <p>
                    The high will be {Math.round(this.props.highTemp)}°, with a low of {Math.round(this.props.lowTemp)}°.
                    The weather will be {this.props.description}, with a {Math.round(this.props.rain * 100)}% chance of rain.
                </p>
            </main>
        );
    }
}

export default WeatherDisplay;