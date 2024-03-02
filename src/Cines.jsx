import './firebaseConfig';
import { getDocs, collection } from 'firebase/firestore'
import { db } from './firebaseConfig';
import { useEffect, useState } from 'react';
import { ListaCines } from './components/ListaCines';

export function Cines() {
    const [listaCine, setListaCine] = useState([])

    useEffect(() => {
        console.log('renderize cines just once')
        const fetchCines = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'cines'));
                const temporalArray = [];
                querySnapshot.forEach((doc) => {
                    temporalArray.push(doc.data());
                });
                setListaCine(temporalArray);
            } catch (error) {
                console.error('Error fetching documents: ', error);
            }
        };

        fetchCines();
    }, []);
    return (
        <>
            <div className="contenido">
                <div className="publicidad">
                    <a href="http://www.cinestar.com.pe/starcard/"><img src="src\img\varios\starcard.jpg" /></a>
                    <a href="http://www.cinestar.com.pe/cinefilo_star/"><img src="src\img\varios\cinefilo-star.jpg" /></a>
                </div>
                <div className="contenido-interno" >
                    <br /><h1>Nuestros cines</h1><br />
                    <ListaCines listaCine={listaCine}></ListaCines>
                </div>
            </div>
            <div className="clearbox"><br /></div>

        </>
    )
}
