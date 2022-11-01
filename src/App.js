import React from 'react';
import MovieList from './components/MovieList';
import './App.css'
import Title from './components/Title';
import ScrollTop from './components/ScrollTop';

const App = () => {
  return (
    <div>
      <Title />
      <MovieList />
      <ScrollTop />
    </div>
  );
};

//  "proxy": "https://openapi.naver.com",

export default App;
