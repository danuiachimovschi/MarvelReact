import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Main } from './layouts/Main';
import 'normalize.css';
import './assets/scss/main.scss';
import { SingleCharacter } from './pages/SingleCharacter/SingleCharacter';
import { SingleDiary } from './pages/SingleDiary/SingleDiary';
import { MainPage } from './pages/Main/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Main>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/character" element={<SingleCharacter />} />
        <Route path="/diary" element={<SingleDiary />} />
      </Routes>
    </Main>
  </Router>
);

