import React from 'react'

class BreweryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {breweryList: this.props.breweryList};
        debugger;
    }

    render() {
        return (
            <label>
                test
            </label>
        )
    }
}

export default BreweryList;