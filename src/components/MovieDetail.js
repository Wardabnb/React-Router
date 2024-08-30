import { useParams, Link } from "react-router-dom";

function MovieDetail({ movies }) {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === title);

  // Handle case when movie is not found
  if (!movie) {
    return <div>Movie not found!</div>;
  }

  // Ensure trailerLink is in the embed URL format
  const embedURL = movie.trailerLink
    ? movie.trailerLink.replace("watch?v=", "embed/")
    : "";

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      {embedURL ? (
        <iframe
          width="560"
          height="315"
          src={embedURL}
          title={movie.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>No trailer available</p>
      )}
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default MovieDetail;
