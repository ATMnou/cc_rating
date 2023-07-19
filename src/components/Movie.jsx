import PropTypes from "prop-types";
import "./Movie.css"
import { Link } from "react-router-dom";

function Movie({ year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <Link 
                to={"/movie-detail"}
                state={{year, title, summary, poster, genres}}
            >
                <img src={poster} alt={title} title={title} />
                <p style={{fontSize: "30px"}}>상세히 보려면 클릭!</p>
            </Link>
        </div>
    )
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
    // genres: PropTypes.array.isRequired,
}

export default Movie;