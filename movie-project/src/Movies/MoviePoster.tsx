import React from 'react'

interface MoviePosterProps {
    poster: string

}

const MoviePoster: React.FC<MoviePosterProps> = (props) => {
    return (
        <div>
            <img className="poster" src={"http://image.tmdb.org/t/p/w500/" + props.poster} alt="" />   
        </div>
    )
}

export default MoviePoster

