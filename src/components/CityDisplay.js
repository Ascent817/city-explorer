import React from "react";

export class CityDisplay extends React.Component {
    render() {
        return (
            <main className="blur">
                <h3>{this.props.data.display_name}</h3>
                <p>
                    Latitude: {this.props.data.lat}<br/>
                    Longitude: {this.props.data.lon}
                </p>
                <img className="map-image" alt="map" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.props.data.lat},${this.props.data.lon}&zoom=12`}></img>
            </main>
        );
    }
}

export default CityDisplay;