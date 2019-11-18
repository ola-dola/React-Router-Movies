import React, { useState, useEffect } from "react";
import axios from "axios";

import MovieCard from './MovieCard';

const Movie = props => {
  // debugger

  const [movie, setMovie] = useState();
  const id = props.match.params.id;

  useEffect(() => {

    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <MovieCard movie={movie}/>
  );
};

export default Movie;
