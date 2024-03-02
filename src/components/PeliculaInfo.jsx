
export function PeliculaInfo({info}) {
    console.log(info);
    return (
        <>
            {info.map((pelicula) => {
                return (
                    <>
                    <div className="contenido-pelicula" key={pelicula.id}>
                        <div className="datos-pelicula">
                            <h2>{pelicula.Titulo}</h2>
                            <p>{pelicula.Sinopsis}</p>
                            <br />
                            <div className="tabla">
                                <div className="fila">
                                    <div className="celda-titulo">Título Original :</div>
                                    <div className="celda">{pelicula.Titulo}</div>
                                </div>
                                <div className="fila">
                                    <div className="celda-titulo">Estreno :</div>
                                    <div className="celda">{pelicula.FechaEstreno}</div>
                                </div>
                                <div className="fila">
                                    <div className="celda-titulo">Género :</div>
                                    <div className="celda">{pelicula.Geneross}</div>
                                </div>
                                <div className="fila">
                                    <div className="celda-titulo">Director :</div>
                                    <div className="celda">{pelicula.Director}</div>
                                </div>
                                <div className="fila">
                                    <div className="celda-titulo">Reparto :</div>
                                    <div className="celda">{pelicula.Reparto}</div>
                                </div>
                            </div>
                        </div>
                        <img src={`/src/img/pelicula/${pelicula.id}.jpg`} width="160" height="226"></img><br /><br />
                        </div><div className="pelicula-video">
                            <embed src={`https://www.youtube.com/v/${pelicula.Link}`} type="application/x-shockwave-flash" width="580" height="400"></embed>
                            </div>
                    </>
                )
            })}
        </>
    )
}
