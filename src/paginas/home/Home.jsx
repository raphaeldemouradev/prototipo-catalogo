import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import BottomNav from "../../components/bottomNav/BottomNav";
import { useEffect, useState } from "react";
import MovieCard from "../../components/movie-card/MovieCard";

  const moviesURL = import.meta.env.VITE_API;
  const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
    const navigate = useNavigate();
    function appPag() {
      navigate('/App');
    }

    const [topMovies, setMovies] = useState([]);
    const getTopMovies = async (url) => {
      const res = await fetch(url);
      const data = await res.json();

      setMovies(data.results);
    };

    useEffect(() => {
      const TopRateUrl = `${moviesURL}top_rated?api_key=${apiKey}`;

      getTopMovies(TopRateUrl);
    }, [])

  return (
    <div>
      <Navbar />
      <div>
        {topMovies && topMovies.map((movie) => <MovieCard movie={movie} />)}
      </div>

      <h1>Pagina Home</h1>
      <button onClick={appPag}>Voltar para Cadastro</button>
      <BottomNav />
    </div>
  )
}

export default Home