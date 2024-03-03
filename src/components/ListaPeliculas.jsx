import { Link } from "react-router-dom";

export function ListaPeliculas({ lista }) {
    return (
        <>
            {lista.map((pelicula) => (
                <div className="contenido-pelicula" key={pelicula.id}>
                    <div className="datos-pelicula">
                        <h2>{pelicula.Titulo}</h2><br />
                        <p>{pelicula.Sinopsis}</p>
                        <br />
                        <div className="boton-pelicula">
                            <Link to={`/peliculas/${pelicula.id}`}>
                                <img src="src\img\varios\btn-mas-info.jpg" width="120" height="30" alt="Ver info" />
                            </Link>
                        </div>
                        <div className="boton-pelicula">
                            <a href={`https://www.youtube.com/v/${pelicula.Link}`} target="_blank">
                                <img src="src\img\varios\btn-trailer.jpg" width="120" height="30" alt="Ver trailer" />
                            </a>
                        </div>
                    </div>
                    <img src={`src/img/pelicula/${pelicula.id}.jpg`} width="160" height="226" /><br /><br />
                </div>
            ))}
        </>
    );
}
