import logo from './logo.svg';
import { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Menu from './components/Menu';
import Home from './pages/home/Home';
import Layout from './pages/layout/Layout';
import Campeonato from './pages/campeonato/Campeonato';

export default class App extends Component {
  render()
  {
    return (
      <>
      <BrowserRouter>
        <Routes>  
          <Route exact path="/" element={<Layout />}>
            <Route exact path="home" element={<Home />} />
            <Route exact path="campeonato" element={<Campeonato />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </>
    );
  }
  
}
