import React from "react";
import reactDOM from "react-dom/client";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: this.props.start,
        }
    }

    contar() {
        this.setState(
            state => ({seconds: state.seconds +1})
        );
    }

    render() {
        return <h1>Timer</h1>;
    }

}

export default Timer();