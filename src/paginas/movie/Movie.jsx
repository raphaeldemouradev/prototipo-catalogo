import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import MovieCard from "../../components/movie-card/MovieCard"
import { BsFillFileEarmarkFill, BsHourglassSplit } from "react-icons/bs";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Movie() {
    const {id} = useParams();
    const [movie, setMovie] = useState(null)

    const getMovie = async(url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data);
    }
//
    useEffect(() => {
        const movieURL = `${moviesURL}${id}?api_key=${apiKey}`
        getMovie(movieURL)
    }, [])
//

    return (
        <div className="movie-page">
            {movie && (
                <>
                    <MovieCard movie={movie} showLink={false} />
                    <p className="tagline">{movie.tagline}</p>
                    <div className="info">
                        <h3><BsHourglassSplit /> Duração</h3>
                        <p>{movie.runtime} Minutos</p>
                    </div>
                    <div>
                        <h3><BsFillFileEarmarkFill /> Descrição</h3>
                        <p>{movie.overview}</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default Movie