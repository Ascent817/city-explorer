import React from "react";
import './CityExplorer.css';
import axios from 'axios';

class CityExplorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
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

            this.setState({
                data: response.data[0],
                error: ''
            });
        } catch(error) {
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
                    <main className="blur">
                        <h3>{this.state.data.display_name}</h3>
                        <p>
                            Latitude: {this.state.data.lat}<br/>
                            Longitude: {this.state.data.lon}
                        </p>
                        <img className="map-image" alt="map" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.data.lat},${this.state.data.lon}&zoom=12`}></img>
                    </main>
                }
                {
                    this.state.error &&
                    <main className="blur">
                        <h3>Uh oh!</h3>
                        <p>
                            Error: {this.state.error.response.data.error}
                        </p>
                    </main>
                }
            </>
        );
    }
}

export default CityExplorer;