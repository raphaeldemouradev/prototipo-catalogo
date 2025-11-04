import Navbar from '../../components/navbar/Navbar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieCard from '../../components/movie-card/MovieCard';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "../../components/movie-card/MovieCard.css";

function Search() {
    const navigate = useNavigate();
    function voltarHomePag() {
        navigate('/Home');
    }

    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");
//
    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
    };

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?api_key=${apiKey}&query=${query}`;

        getSearchedMovies(searchWithQueryURL);
    }, [query])
//
    return (
        <div>
            <Navbar />
            <div>
                <h2>Resultados para: <span style={{color: "#ffa703ff"}}>{query}</span></h2>
            </div>

            <div>
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>

            <h1>Pagina de Pesquisa</h1>
            <button onClick={voltarHomePag}>Voltar para Home</button>
        </div>
    )
}

export default Search