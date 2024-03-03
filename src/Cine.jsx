import './firebaseConfig';
import { getDocs, collection, query } from 'firebase/firestore'
import { db } from './firebaseConfig';
import { useEffect, useState } from 'react';
import { CineInfo } from './components/CineInfo';
import { useParams } from 'react-router-dom';

export function Cine() {
  const [listaCine, setListaCine] = useState([])
  const [listaTarifa, setListaTarifa] = useState([])
  const [listaCinePelicula, setListaCinePelicula] = useState([])

  const id = useParams().id

  useEffect(() => {
    const fetchCine = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'cines'));
        const temporalArray = [];
        querySnapshot.forEach((doc) => {
          temporalArray.push(doc.data());
        });
        if (id) {
          setListaCine(temporalArray.filter((cine) => cine.id === id));
        }
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    fetchCine();
  }, [id]);
  useEffect(() => {
    const fetchCineTar = async () => {
      try {
        const q = query(collection(db, "cines"));
        const querySnapshot = await getDocs(q);

        const temporalArrayTar = [];
        querySnapshot.forEach((doc) => {
          temporalArrayTar.push(doc.data());

        });
        let tarifasCine
        if (temporalArrayTar) {
          tarifasCine = temporalArrayTar.find(cine => cine.id === id)?.tarifas || [];
          setListaTarifa(tarifasCine);
        } else {
          console.log('no entra');
        }
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    fetchCineTar();
  }, [id]);
  useEffect(() => {
    const fetchCinePeli = async () => {
      try {
        const q = query(collection(db, "cines"));
        const querySnapshot = await getDocs(q);

        const temporalArrayPel = [];
        querySnapshot.forEach((doc) => {
          temporalArrayPel.push(doc.data());

        });
        let pelisCine
        if (temporalArrayPel) {
          pelisCine = temporalArrayPel.find(cine => cine.id === id)?.peliculas || [];
          setListaCinePelicula(pelisCine);
        } else {
          console.log('no entra');
        }
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    fetchCinePeli();
  }, [id]);
  return (
    <>
      <div className="contenido">
        <div className="publicidad">
          <a href="http://www.cinestar.com.pe/starcard/"><img src="\src\img\varios\starcard.jpg" /></a>
          <a href="http://www.cinestar.com.pe/cinefilo_star/"><img src="\src\img\varios\cinefilo-star.jpg" /></a>
        </div>
        <div className="contenido-interno" >
          <br /><h1>Nuestros Cines</h1><br />
          <CineInfo infoCine={listaCine} tarifaCine={listaTarifa} peliculasCine={listaCinePelicula}></CineInfo>
        </div>
      </div>
      <div className="clearbox"><br /></div>

    </>
  )
}
