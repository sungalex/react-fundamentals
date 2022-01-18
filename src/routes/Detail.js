import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log({ json });
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return <h1>Detail</h1>;
}

export default Detail;
