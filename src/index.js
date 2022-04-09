import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Anime from './Anime';



ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />   
      <Route path = "/films/:anime_id" element={<Anime/>} />
    </Routes>
  </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

