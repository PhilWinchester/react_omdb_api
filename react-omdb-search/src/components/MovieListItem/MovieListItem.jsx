import React, { Component } from 'react';
import './MovieListItem.css';

export default class MovieListItem extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title} ({this.props.year})</h2>
        <img src={this.props.poster} alt={this.props.title} />
      </div>
    );
  }
}
