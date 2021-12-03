import React from 'react'

interface SearchPosterProps {
    poster: string
}

const SearchPoster: React.FC<SearchPosterProps> = (props) => {
    return (
        <div>
            <img className="poster" src={"http://image.tmdb.org/t/p/w500/" + props.poster} alt="" />   
        </div>
    )
}

export default SearchPoster