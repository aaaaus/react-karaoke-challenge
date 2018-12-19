import React, { Component } from 'react';

class Filter extends Component {

  render() {
    // console.log("FILTER PROPS ARE: ", this.props);
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input onChange={this.props.handleFilter} id="title-filter" type="text" />
      </div>
    );
  }
}

export default Filter;
