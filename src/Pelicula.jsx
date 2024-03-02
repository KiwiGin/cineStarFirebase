import './firebaseConfig';
import { getDocs, collection } from 'firebase/firestore'
import { db } from './firebaseConfig';
import { useEffect, useState } from 'react';
import { PeliculaInfo } from './components/PeliculaInfo';
import { useParams } from 'react-router-dom';
export function Pelicula() {
    const [listaPelicula, setListaPelicula] = useState([])
    const id = useParams().id
    console.log(id);

    useEffect(() => {
        console.log('renderize cines just once')
        const fetchPelicula = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'peliculas'));
                const temporalArray = [];
                querySnapshot.forEach((doc) => {
                    temporalArray.push(doc.data());
                    
                });
                if(id){
                    setListaPelicula(temporalArray.filter((peli) => peli.id === id));
                }
            } catch (error) {
                console.error('Error fetching documents: ', error);
            }
        };

        fetchPelicula();
    }, [id]);
    return (
        <>
            <div className="contenido">
                <div className="publicidad">
                    <a href="http://www.cinestar.com.pe/starcard/"><img src="\src\img\varios\starcard.jpg" /></a>
                    <a href="http://www.cinestar.com.pe/cinefilo_star/"><img src="\src\img\varios\cinefilo-star.jpg" /></a>
                </div>
                <div className="contenido-interno" >
                    <br /><h1>Cartelera</h1><br />
                    {console.log('objeto')}
                    {console.log(listaPelicula)}
                    <PeliculaInfo info={listaPelicula}></PeliculaInfo>
                </div>
            </div>
            <div className="clearbox"><br /></div>

        </>
    )
}
