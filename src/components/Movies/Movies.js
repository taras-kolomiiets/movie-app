import { Link } from "react-router-dom";

const urlComponent = "https://image.tmdb.org/t/p/w342";

const Movies = ({ movies }) => {
  return (
    <>
      <ul className="gallery">
        {movies.map((el) => {
          return (
            <li className="movie" key={el.id}>
              <Link to={`/movie/${el.id}`}>
                <img src={urlComponent + el.poster_path} alt="" />
                <div className="movie-info">
                  <h3>{el.title}</h3>
                  <span>{el.vote_average}</span>
                </div>
                <div className="overview">
                  <h3>Overview:</h3>
                  {el.overview}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
