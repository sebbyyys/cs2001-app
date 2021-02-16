import React, { Component } from 'react';
import './Styles/RepCounter.css';

class RepCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show: true
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }

    DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
        if (this.state.clicks <= 0) {
            this.setState({ clicks: this.state.numDisplay = 0});
        }
    }

    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }

    ResetClick = () => {
        this.setState({ clicks: this.state.numDisplay = 0 })
    }

    render() {
        return (
            <div className="row">
                <div className="button">
                    <button className="button-all" onClick={this.IncrementItem}>Click to Increment by 1</button>
                </div>
                <div className="button">
                    <button className="button-all" onClick={this.DecreaseItem}>Click to Decrease by 1</button>
                </div>
                <div className="button">
                    <button className="button-all" onClick={this.ToggleClick}> {this.state.show ? 'Hide number' : 'Show number'} </button>
                </div>
                <div className="button">
                    <button className="button-all" onClick={this.ResetClick}>Click to Reset</button>
                </div>
                <div className="row-below">
                <div className="number">
                    {this.state.show ? <h2>{this.state.clicks}</h2> : ''}
                </div>
            </div>
            </div>
            
        );
    }
}

export default RepCounter;