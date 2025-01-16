import { useEffect, useState } from "react";
const KEY = "";

function App() {
  const [movies, setMovies] = useState([]);

  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=1ec43938`)
    .then((res) => res.json())
    .then((data) => setMovies(data.Search));

  return (
    <div>
      <h1>Movies</h1>
      <input type="text" placeholder="Search movies..." />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.imdbID}>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
