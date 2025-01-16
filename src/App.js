import { useEffect, useState } from "react";
const KEY = "1ec43938"; // API key

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("batman"); // New state with default value "batman"

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`) // Use "query" in the API URL
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search); // Update movies only if the response is valid
        } else {
          setMovies([]); // Clear movies if no valid data is returned
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMovies([]); // Handle errors by clearing the movies list
      });
  }, [query]); // Re-fetch when "query" changes

  return (
    <div>
      <h1>Movies</h1>
      <input
        type="text"
        placeholder="Search movies..."
        value={query} // Controlled element
        onChange={(e) => setQuery(e.target.value)} // Update state on user input
      />
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

