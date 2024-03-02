export function CineInfo({ infoCine, tarifaCine, peliculasCine }) {
    return (
        <>
            {infoCine.map((cine) => {
                return (<>
                    
                        <h2>{cine.RazonSocial}</h2>
                        <div className="cine-info" key={cine.id}>
                            <div className="cine-info datos">
                                <p>{cine.Direccion} - {cine.Detalle}</p>
                                <p>Teléfono: {cine.Telefonos} anexo 865</p>
                                <br />
                                <div className="tabla"></div>
                                {tarifaCine.map((tarifa, index) => {
                                    // Determinamos si la fila es par o impar
                                    const esPar = index % 2 === 0;
                                    // Agregamos la clase correspondiente a la fila
                                    const claseFila = esPar ? "" : "impar";
                                    <div className={`fila ${claseFila}`}>
                                        <div className="celda-titulo">{tarifa.DiasSemana}</div>
                                        <div className="celda">{tarifa.Precio}</div>
                                    </div>

                                })}
                            </div>
                            <div className="aviso">
                                <p>A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de S/. 1.00 adicional al tarifario vigente, a los usuarios que compren sus entradas por el aplicativo de Cine Papaya para Cine Star Comas, Excelsior, Las Américas, Benavides, Breña, San Juan, UNI, Aviación, Sur, Porteño, Tumbes y Tacna.</p>
                            </div>
                        </div>
                        <img src={`/src/img/cine/${cine.id}.2.jpg`} />
                        <br /><br /><h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4><br />
                        <div className="cine-info peliculas">
                            <div className="tabla">
                                <div className="fila">
                                    <div className="celda-cabecera">Películas</div>
                                    <div className="celda-cabecera">Horarios</div>
                                </div>
                                {peliculasCine.map((pelicula, index) => {
                                    const esPar = index % 2 === 0;
                                    const claseFila = !esPar ? "" : "impar";
                                    <div className={`fila ${claseFila}`}>
                                        <div className="celda-titulo">${pelicula.Titulo}</div>
                                        <div className="celda">${pelicula.Horarios}</div>
                                    </div>

                                })}

                            </div>
                        </div>
                    
                        <div>
                            <img src={`/src/img/cine/${cine.id}.3.jpg`} alt="Imagen del cine" />
                            <span className="tx_gris">Precios de los juegos: desde S/1.00 en todos los Cine Star.<br />
                                Horario de atención de juegos es de 12:00 m hasta las 10:30 pm.
                                <br /><br />
                                Visitános y diviértete con nosotros.
                                <br /><br />
                                <b>CINESTAR</b>, siempre pensando en tí.
                            </span>
                        </div>
</>

                            
    )
})}
                        </>
                        )
}