import React from 'react'
import MoviePoster from './MoviePoster'
import { Movie } from '../Types/types'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

interface MovieRowProps {
    movies: Array<Movie>
    title: string
}

const MovieRow: React.FC<MovieRowProps> = (props: MovieRowProps) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7,
          slidesToSlide: 6,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 2,
        },
      };
     
    return (
      <div>
        <h1 className="title">{props.title}</h1>
        <Carousel responsive={responsive}>
          {props.movies.map((movie) => {
            return <Link to={`/detail/${movie.id}`}><MoviePoster  key={movie.id} poster={movie.poster_path} />
            </Link>
          })}
        </Carousel> 
      </div>

    )
}
export default MovieRow