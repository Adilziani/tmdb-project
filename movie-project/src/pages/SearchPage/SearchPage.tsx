import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MoviePoster from "../../Movies/MoviePoster";
import { Movie } from "../../Types/types";
import SearchPoster from "./SearchPoster";

interface ParamTypes {
  id: string;
}
interface SearchPageProps {
    movies: Array<Movie>
    id: string;
    title: string;
    poster: string;
}
const SearchPage = (props: SearchPageProps) => {
  const { id } = useParams<ParamTypes>();

  const [search, setSearch] = useState<Array<Movie>>([]);

  const url = `https://api.themoviedb.org/3/search/movie?api_key=ff5e13ddef3a25f21a4115473c46bbbb&language=en-US&page=1&query=${id}`;
  const searching = async () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setSearch(json.results));
      //console.log("search", search);
  };

  useEffect(() => {
    searching();
  }, [url]);

  return (
    <div>
      {search.map((props) => {
        return (
          <div className="flex-container">
            <Link to={`/detail/${props.id}`}><img className="search-poster"  src={"http://image.tmdb.org/t/p/w500/" + props.poster_path} alt="" />
            </Link>
            <div className="search-description">
              <h1>{props.title} </h1>
              <h4>{props.release_date}</h4>
              <h2>{props.overview}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchPage;
