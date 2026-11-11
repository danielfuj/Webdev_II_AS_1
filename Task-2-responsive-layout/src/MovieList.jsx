import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={movie.id} movie={movie} index={index} />
      ))}
    </div>
  );
}

export default MovieList;