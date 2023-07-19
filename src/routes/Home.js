import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import axios from "axios";
import "./Home.css";
function Home() {
  const [movies, SetMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getmovies() {
      try {
        const movies = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        SetMovies(movies.data.data.movies);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getmovies();
  }, []);

  return (
    <section className="container">
      {loading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </section>
  );
}
export default Home;
