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
            <img className="backdrop" src={"http://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
            <div style={{display: 'flex', flexDirection: 'row', marginTop: 500, marginLeft: 50}}>
                <img className="poster" src={"http://image.tmdb.org/t/p/w500" + movie.poster_path} />
                    <div style={{display: 'flex', flexDirection: 'column', width: 500, marginLeft: 100, fontSize: 20}}>
                        <div style={{color: 'white'}}>{movie.overview}</div>
                        <div style={{color: 'white'}}>{movie.release_date}</div>
                        <div style={{color: 'white'}}>{movie.original_title}</div> 
                    </div>
            </div>     
        </div>
    )
}

export default DetailPage
