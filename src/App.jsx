import './App.css'
import { Inicio } from './Inicio';
import { Peliculas } from './Peliculas';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Cines } from './Cines';
import { Pelicula } from './Pelicula';


function App() {


  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/cartelera' element={<Peliculas />}></Route>
          <Route path='/estrenos' element={<Peliculas />}></Route>
          <Route path='/cines' element={<Cines />}></Route>
          <Route path='/peliculas/:id' element={<Pelicula />}></Route>
        </Routes>


        <Footer></Footer>
      </BrowserRouter>

    </>
  );
}

export default App;
