import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Movie } from '../../../Types/types'
import Modal from './Modal';

interface ParamTypes { id: string }

interface DetailPageProps {
    movies: Array<Movie>
    poster: string
    backdrop: string
    key:string
}

const DetailPage: React.FC<DetailPageProps> = ( movies: DetailPageProps) => {
    let {id} = useParams<ParamTypes>();
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const[key, setKey] = useState<any>() 

    let movie = movies.movies.find(movie => movie.id == parseInt(id))
    // if (movie == undefined) { return <div>Movie not found</div> }
    // else {}

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movie?.id}/videos?api_key=ff5e13ddef3a25f21a4115473c46bbbb&language=en-US`)
        .then(response => response.json())
        .then(json => json.results.map((key: Movie) => setKey(key.key)))
    }, [])
    console.log(key)

    return (
        <div>
            <img className="backdrop" src={"http://image.tmdb.org/t/p/w500" + movie?.backdrop_path} />
            <div style={{display: 'flex', flexDirection: 'row', marginTop: 500, marginLeft: 50}}>
                        
                <button onClick={()=> {setIsOpen(true)}}>
                    <img className="poster" src={"http://image.tmdb.org/t/p/w500" + movie?.poster_path} />
                </button>
                <Modal>
                    {isOpen && <iframe 
                            width="560" 
                            height="315"
                            allowFullScreen ={true}
                            src={`https://www.youtube.com/embed/${key}`} 
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">   
                        </iframe>}
                </Modal>

                    <div style={{display: 'flex', flexDirection: 'column', width: 500, marginLeft: 100, fontSize: 20}}>
                        <div style={{color: 'white', fontSize: 35, fontWeight: 'bold' ,paddingBottom: 20}}>{movie?.title}</div>
                        <div style={{color: 'white', fontSize:15, paddingBottom: 40}}>{movie?.release_date}</div>
                        <div style={{color: 'white'}}>{movie?.overview}</div>
                    </div>
            </div>   

        </div>
    )
}

export default DetailPage;
