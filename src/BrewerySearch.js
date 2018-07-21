import React from 'react'

class BrewerySearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <label>
                Brewery Name:
                <input type="text" value={this.state.value} 
                    onChange={this.handleChange} placeholder="Enter brewery name"/>
            </label>
        )
    }
}

export default BrewerySearch;