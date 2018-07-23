import React from 'react'

class BrewerySearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onBreweryChange(e.target.value);
    }

    render() {
        const brewery = this.props.brewery;
        return (
            <label>
                Brewery Name:
                <input type="text" value={brewery} 
                    onChange={this.handleChange} placeholder="Enter brewery name"/>
            </label>
        )
    }
}

export default BrewerySearch;