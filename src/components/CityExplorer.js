import React from "react";
import './CityExplorer.css';

class CityExplorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            city: ''
        };
    }

    render() {
        return (
            <form>
                <input type="text" />
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default CityExplorer;