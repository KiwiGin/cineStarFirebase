
export function ListaCines({ listaCine }) {
    return (
        <>
            {listaCine.map((cine) => {
                return (

                    <div className="contenido-cine" key={cine.id}>
                        <img src={`src/img/cine/${cine.id}.1.jpg`} width="227" height="170" />
                        <div className="datos-cine">
                            <h4>{cine.RazonSocial}</h4><br />
                            <span>{cine.Direccion} - {cine.Detalle}<br /><br />Teléfono: {cine.Telefonos} anexo 865</span>
                        </div>
                        <br />
                        <a href="/cine">
                            <img src="src\img\varios\ico-info2.png" width="150" height="40" />
                        </a>
                    </div>
                )
            })}
        </>
    )
}
