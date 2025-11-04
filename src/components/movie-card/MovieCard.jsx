import { Link } from "react-router-dom";
import "./MovieCard.css"

const imageUrl = import.meta.env.VITE_IMG;

function MovieCard({ movie, showLink = true }) {
    return (
        <div className="container-card">
            <div className="content-card">
                <img src={imageUrl + movie.poster_path} alt={movie.title} />

                {showLink && <Link to={`/movie/${movie.id}`}>
                    <div className="detals">
                        Ver Detalhes
                    </div>
                </Link>}

            </div>
        </div>
    )
}

export default MovieCard