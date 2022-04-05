import React, { useEffect } from 'react';
import './App.css';


//a244e5b6

const API_URL = 'http://www.omdbapi.com?apikey=a244e5b6';

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <h1>
      Hello
    </h1>
  );
}

export default App;
