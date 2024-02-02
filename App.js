import React, { useState } from 'react';

const MovieTable = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState('');
  const [newDirector, setNewDirector] = useState('');

  const addMovie = () => {
    setMovies([...movies, { movie: newMovie, director: newDirector }]);
    setNewMovie('');
    setNewDirector('');
  };

  const removeMovie = (index) => {
    const updatedMovies = [...movies];
    setMovies([...movies, { movie: newMovie, director: newDirector }]);
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Movies and Directories</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {movies.map((movie, index) => (
                <th key={index} style={{ border: '1px solid #ddd', padding: '10px', backgroundColor: '#f2f2f2' }}>
                  <div>
                    <span style={{ color: 'green' }}>{movie.movie}</span>
                    <br />
                    <span>{movie.director}</span>
                  </div>
                  <button onClick={() => removeMovie(index)} style={{ backgroundColor: 'red', color: '#fff', cursor: 'pointer' }}>
                    Remove
                  </button>
                </th>
              ))}
            </tr>
          </thead>
        </table>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <input
            type="text"
            placeholder="Movie Name"
            value={newMovie}
            onChange={(e) => setNewMovie(e.target.value)}
          />
          <input
            type="text"
            placeholder="Director"
            value={newDirector}
            onChange={(e) => setNewDirector(e.target.value)}
          />
          <button onClick={addMovie} style={{ backgroundColor: 'green', color: '#fff', cursor: 'pointer' }}>
            Add Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieTable;
