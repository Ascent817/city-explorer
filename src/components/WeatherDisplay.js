import React from "react";

export class WeatherDisplay extends React.Component {
    render() {
        return (
            <main className="blur">
                <h3>Weather on {this.props.date}</h3>
                <p>
                    The high was {this.props.highTemp}°, with a low of {this.props.lowTemp}°.
                    There was {this.props.clouds}% cloud cover and the wind was blowing {this.props.windDir.replace('-', ' ')}.
                </p>
            </main>
        );
    }
}

export default WeatherDisplay;