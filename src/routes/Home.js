import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  /* 
  // useEffect - version1.0
  useEffect(() => {
    fetch("https://yst.mx/api/v2/list_movies.json/minimum_rating=8.8")
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);
  console.log(movies);
 */

  /* 
  // useEffect - version2.0
  const getMovies = async () => {
    const response = await fetch(
      "https://yst.mx/api/v2/list_movies.json/minimum_rating=8.8"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
 */

  // useEffect - version2.1
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <div className={styles.title}>Movie App</div>
      <div className={styles.container}>
        {loading ? (
          <div className={styles.loader}>
            <span>Loading...</span>
          </div>
        ) : (
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={
                  Array.isArray(movie.genres)
                    ? movie.genres
                    : ["Genres not defined"]
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
