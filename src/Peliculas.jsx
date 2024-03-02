import { Lista } from './components/Lista'
import './firebaseConfig';
import { getDocs, collection } from 'firebase/firestore'
import { db } from './firebaseConfig';
import { useEffect, useState } from 'react';

export function Peliculas() {
    const [lista, setLista] = useState([])

    useEffect(() => {
        console.log('renderize just once')
        const fetchPeliculas = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'peliculas'));
                const temporalArray = [];
                querySnapshot.forEach((doc) => {
                    temporalArray.push(doc.data());
                });
                setLista(temporalArray);
            } catch (error) {
                console.error('Error fetching documents: ', error);
            }
        };

        fetchPeliculas();
    }, []);
    return (
        <>
            <div className="contenido">
                <div className="publicidad">
                    <a href="http://www.cinestar.com.pe/starcard/"><img src="src\img\varios\starcard.jpg" /></a>
                    <a href="http://www.cinestar.com.pe/cinefilo_star/"><img src="src\img\varios\cinefilo-star.jpg" /></a>
                </div>
                <div className="contenido-interno" >
                    <br /><h1>Cartelera</h1><br />
                    <Lista lista={lista}></Lista>
                </div>
            </div>
            <div className="clearbox"><br /></div>

        </>
    )
}
