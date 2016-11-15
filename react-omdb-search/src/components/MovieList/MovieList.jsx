import React, { Component } from 'react';
import MovieListItem from '../MovieListItem/MovieListItem';
import './MovieList.css';

export default class MovieList extends Component {

  render() {
    const movies = this.props.movies.map((m, i) => {
      return (
        <MovieListItem
          key={i}
          title={m.Title}
          year={m.Year}
          poster={m.Poster}
        />
      )
    });
    return (
      <div id="results-container">
        {movies}
      </div>
    );
  }
}
