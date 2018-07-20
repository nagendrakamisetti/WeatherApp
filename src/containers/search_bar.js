import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherData } from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: 'Tampa' };

        // NOTE: below line is required since onInputChange is callback and gives error since they are not in same context. if you are not binding.
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    /*              Type1: 
                    onChange={event => {
                        console.log(event.target.value);
                        this.setState({ term: event.target.value }); 
                    }}
    */

    onFormSubmit(event) {
        event.preventDefault();

        // we need to go and getch weather data
        // https://openweathermap.org/forecast5
        this.props.fetchWeatherData(this.state.term);
        this.setState({ term: '' });

    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary"> Submit</button>
                </span>
            </form>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeatherData }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
