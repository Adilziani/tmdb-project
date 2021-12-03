import React from 'react'

interface SearchPosterProps {
    poster: string
    backdrop: string
}

const DetailPagePoster: React.FC<SearchPosterProps> = (props) => {
    return (
        <div>
            <img className="poster" src={"http://image.tmdb.org/t/p/w500/" + props.poster} alt="" />
            {/* <img className="backdrop" src={"http://image.tmdb.org/t/p/w500/" + props.backdrop} alt="" />      */}
        </div>
    )
}

export default DetailPagePoster