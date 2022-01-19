import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const getMovieDetail = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(json);
      console.log({ movie });
    };
    getMovieDetail();
  }, [id, movie]);

  return <h1>Detail</h1>;
}

export default Detail;
