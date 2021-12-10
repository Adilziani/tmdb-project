import React from 'react'
import { Link } from 'react-router-dom'
import { Movie } from '../../Types/types'

interface SearchPosterProps {
    movies: Array<Movie>
    poster: string
}

const SearchPoster: React.FC<SearchPosterProps> = (props) => {
    return (
        <div>
            {props.movies.map((movie) => {
            return <Link to={`/detail/${movie.id}`}><img className="poster" src={"http://image.tmdb.org/t/p/w500/" + props.poster} alt="" />
            </Link>
          })}
        </div>
    )
}

export default SearchPoster