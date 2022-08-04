import React from "react";

export class WeatherDisplay extends React.Component {
    render() {
        return (
            <main className="blur">
                <h3>Weather on {this.props.date}</h3>
                <p>
                    The high will be {this.props.highTemp}°, with a low of {this.props.lowTemp}°.
                    There is a {this.props.rain}% chance of rain.
                </p>
            </main>
        );
    }
}

export default WeatherDisplay;