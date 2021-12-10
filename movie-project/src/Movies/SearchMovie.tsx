import React, { useEffect, useState } from 'react'
import { Movie } from '../Types/types'
import { Link } from 'react-router-dom'

const SearchMovie = () => {
    const[name, setName] = useState<string>('')
    const[search, setSearch] = useState<Array<Movie>>([])
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=ff5e13ddef3a25f21a4115473c46bbbb&language=en-US&page=1&query=${name}`
    const searching = async () => {
        fetch(url)
        .then(response => response.json())
        .then(json => setSearch(json.results))
    }

    useEffect(() => {
    searching()
    }, [url])
    return (
        <div className="input-container">
            <input className="search-input" placeholder="search your movie" onChange={(e) => {
                setName(e.target.value)
            }} />
            <Link to={`/search/${name}`}><button className="search-button">Search</button></Link>
        </div>
    )
}

export default SearchMovie
