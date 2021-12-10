import React from 'react'
import MovieRow from '../../Movies/MovieRow'
import Movies from '../../Movies/Movies'
import { Movie } from '../../Types/types'

interface HomePageProps {
    data: {
        horror: Movie[], 
        romance: Movie[],
        action: Movie[],
        crime: Movie[],
        mistery: Movie[],
        upComing: Movie[],
        topRated: Movie[]
    }
}

const HomePage = (props: HomePageProps) => {
    return (
        <div>
            <MovieRow movies={props.data.horror}   title={'Horror Movies'} />
            <MovieRow movies={props.data.action}   title={'Action Movies'} />
            <MovieRow movies={props.data.romance}  title={'Romance Movies'} />
            <MovieRow movies={props.data.crime}    title={'Crime Movies'} />
            <MovieRow movies={props.data.mistery}  title={'Mistery Movies'} />
            <MovieRow movies={props.data.upComing} title={'Upcoming Movies'} />
            <MovieRow movies={props.data.topRated} title={'Top Rated Movies'} />
        </div>
    )
}
export default HomePage