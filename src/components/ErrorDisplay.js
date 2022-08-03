import React from "react";

export class ErrorDisplay extends React.Component {
    render() {
        return (
            <main className="blur">
                <h3>Uh oh!</h3>
                <p>
                    Error: {this.props.error}
                </p>
            </main>
        );
    }
}

export default ErrorDisplay;