import React from 'react'
import { useParams } from 'react-router-dom';
import { Movie } from '../../../Types/types'

interface ParamTypes {
    id: string
}

interface DetailPageProps {
    movies: Array<Movie>
    poster: string
    backdrop: string
}
const DetailPage: React.FC<DetailPageProps> = ({movies}: DetailPageProps) => {
    let {id} = useParams<ParamTypes>();

    let movie = movies.find(movie => movie.id == parseInt(id))
    if (movie == undefined) {
        return <div>Movie not found</div>
    }
    return (
        <div>
            <img className="search-poster" src={"http://image.tmdb.org/t/p/w500" + movie.poster_path} />
            <img className="search-poster" src={"http://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
            <div>{movie.overview}</div>
            <div>{movie.original_title}</div>      
        </div>
    )
}

export default DetailPage
