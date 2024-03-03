import { ListaPeliculas } from './components/ListaPeliculas'
import './firebaseConfig';
import { getDocs, collection } from 'firebase/firestore'
import { db } from './firebaseConfig';
import { useEffect, useState } from 'react';

export function Peliculas() {
    const [lista, setLista] = useState([])
    const parametroRuta = window.location.pathname;

    useEffect(() => {
        const fetchPeliculas = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'peliculas'));
                const temporalArray = [];
                querySnapshot.forEach((doc) => {
                    temporalArray.push(doc.data());
                });
                if (parametroRuta === '/cartelera') {
                    const peliculasFiltradas = temporalArray.filter(pelicula => pelicula.id >= 1 && pelicula.id <= 17);
                    setLista(peliculasFiltradas);
                }
                if (parametroRuta === '/estrenos') {
                    const peliculasFiltradas = temporalArray.filter(pelicula => pelicula.id >= 18 && pelicula.id <= 20);
                    setLista(peliculasFiltradas);
                }
            } catch (error) {
                console.error('Error: ', error);
            }
        };

        fetchPeliculas();
    }, [parametroRuta]);
    return (
        <>
            <div className="contenido">
                <div className="publicidad">
                    <a href="http://www.cinestar.com.pe/starcard/"><img src="src\img\varios\starcard.jpg" /></a>
                    <a href="http://www.cinestar.com.pe/cinefilo_star/"><img src="src\img\varios\cinefilo-star.jpg" /></a>
                </div>
                <div className="contenido-interno" >
                    <br /><h1>Cartelera</h1><br />
                    <ListaPeliculas lista={lista}></ListaPeliculas>
                </div>
            </div>
            <div className="clearbox"><br /></div>

        </>
    )
}
