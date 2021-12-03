import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import MovieRow from './Movies/MovieRow'
import Movies from './Movies/Movies'
import SearchMovie from './Movies/SearchMovie';
import HomePage from './pages/HomePage/HomePage'
import DetailPage from './pages/MoviePage/DetailPage/DetailPage';
import MoviePage from './pages/MoviePage/MoviePage';
import SearchPage from './pages/SearchPage/SearchPage';
import {Movie} from './Types/types';

function App() {
  const [horrorMovies, setHorrorMovies] = useState<Array<Movie>>([])
  const [comedyMovies, setComedyMovies] = useState<Array<Movie>>([])
  const [actionMovies, setActionMovies] = useState<Array<Movie>>([])
  const [romanceMovies, setRomanceMovies] = useState<Array<Movie>>([])
  const [crimeMovies, setCrimeMovies] = useState<Array<Movie>>([])
  const [misteryMovies, setMisteryMovies] = useState<Array<Movie>>([])
  const [topRatedMovies, setTopRatedMovies] = useState<Array<Movie>>([])
  const [upcomingMovies, setUpcomingMovies] = useState<Array<Movie>>([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=ff5e13ddef3a25f21a4115473c46bbbb&with_genres=27')
    .then(response => response.json())
    .then(json => setHorrorMovies(json.results))

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=ff5e13ddef3a25f21a4115473c46bbbb&with_genres=35')
    .then(response => response.json())
    .then(json => setComedyMovies(json.results))

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=ff5e13ddef3a25f21a4115473c46bbbb&with_genres=28')
    .then(response => response.json())
    .then(json => setActionMovies(json.results))

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=ff5e13ddef3a25f21a4115473c46bbbb&with_genres=10749')
    .then(response => response.json())
    .then(json => setRomanceMovies(json.results))

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=ff5e13ddef3a25f21a4115473c46bbbb&with_genres=80')
    .then(response => response.json())
    .then(json => setCrimeMovies(json.results))

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=ff5e13ddef3a25f21a4115473c46bbbb&with_genres=9648')
    .then(response => response.json())
    .then(json => setMisteryMovies(json.results))

    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=ff5e13ddef3a25f21a4115473c46bbbb&language=en-US&page=1')
    .then(response => response.json())
    .then(json => setTopRatedMovies(json.results))

    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=ff5e13ddef3a25f21a4115473c46bbbb&language=en-US&page=1')
    .then(response => response.json())
    .then(json => setUpcomingMovies(json.results))
  }, [])
  
  const data = {
    horror: horrorMovies,
    comedy: comedyMovies,
    action: actionMovies,
    romance: romanceMovies,
    crime: crimeMovies,
    mistery: misteryMovies,
    upComing: upcomingMovies,
    topRated: topRatedMovies
  };

  const movies = [
    ...horrorMovies,
    ...comedyMovies,
    ...actionMovies,
    ...romanceMovies,
    ...crimeMovies,
    ...misteryMovies,
    ...upcomingMovies,
    ...topRatedMovies
  ]
  return (
      <BrowserRouter>
        <div >
        <Header />
        <div>
        <SearchMovie />
        <div>
          <Switch>
            <Route path="/movies">
              <MoviePage data={data}/>  
            </Route>
            <Route path="/" exact>
              <HomePage data={data}  />
            </Route>
            <Route path="/detail/:id">
             <DetailPage movies={movies} poster={''} backdrop={''}/>
            </Route>
            <Route path="/search/:id">
              <SearchPage movies={movies} id={''} title={''} poster={''} />
            </Route>
          </Switch>
        </div>
        </div>
      </div>
      </BrowserRouter>
  );
}
export default App;
