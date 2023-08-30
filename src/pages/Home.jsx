import { useState, useEffect } from 'react';

const moviesURL = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'api_key=8ed200f50a6942ca5bc8b5cdec27ff22';
import MovieCard from '../components/MovieCard';

const Home = () => {
    const [topMovies, setTopMovies] = useState([])
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results)
    }
    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
        getTopRatedMovies(topRatedUrl);
    }, [])

    return (
        <div className='container'>
            <h2 className="title">
                Melhores Filmes: 
            </h2>
            <div className='movies-container'>
                { topMovies.length === 0 && <p>Carregando ...</p>}
                { topMovies.length > 0 && topMovies.map( movie => <MovieCard key={ movie.id } movie={movie} />)}
            </div>
        </div>
    )
}
export default Home