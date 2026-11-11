import React from 'react';
import './MovieCard.css';

function MovieCard({ movie, index }) {
  return (
    <article className={`movie-card card-index-${index}`}>
      <div className="poster-wrapper">
        <img src={movie.poster} alt={movie.title} className="movie-poster" />
      </div>
      
      <div className="card-content">
        {/* Wrap title and description together */}
        <div className="text-wrapper">
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-description">{movie.description}</p>
        </div>
        
        {/* Stack text using <br /> */}
        <button className="watch-btn">WATCH<br />NOW</button>
      </div>
    </article>
  );
}

export default MovieCard;