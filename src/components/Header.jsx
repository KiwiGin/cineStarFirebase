import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
    <header>
			<nav className="nav-sec">
        		<Link to="/">Inicio</Link>&nbsp;&nbsp;l&nbsp;&nbsp;
        		<a href="http://www.cinestar.com.pe/quienes_somos">Quiénes somos</a>&nbsp;&nbsp;l&nbsp;&nbsp;
        		<a href="http://www.cinestar.com.pe/trabaja_con_nosotros">Trabaja con nosotros</a>&nbsp;&nbsp;l&nbsp;&nbsp;
        		<a href="https://www.efact.pe/consult.html" target="_blank">Consulta tu comprobante de pago </a>&nbsp;&nbsp;l&nbsp;&nbsp;
        		<a href="http://www.cinestar.com.pe/contactenos/#contenido_titulo" className="anchorLink">Contáctenos</a>
			</nav>
			<div className="area-logo">
				<a to="/"><img src="\src\img\varios\logo-cinestar.png"/></a>
			</div>
			<nav className="menu">
				<span className="img-social">
					<a href="http://www.facebook.com/multicinestar" target="_blank"><img src="\src\img\varios\ico-face.png"/></a>
					<a href="http://www.twitter.com/multicinestar" target="_blank"><img src="\src\img\varios\ico-twitter.png"/></a>
				</span>
				<span className="social">Síguenos en: </span>

        

				<ul className="menu-principal">
		    		<li className="menu-item"><Link to="/cartelera">Cartelera</Link></li>
		       		<li className="menu-item"><Link to="/estrenos">Próximos estrenos</Link></li>
		       		<li className="menu-item"><Link to="http://www.cinestar.com.pe/starcard">Star Card</Link></li>
		        	<li className="menu-item"><Link to="/cines">Nuestros Cines</Link></li>
		        	<li className="menu-item"><a href="http://www.cinestar.com.pe/ventas_corporativas">Ventas Corporativas</a></li>
		        	<li className="menu-item"><a href="http://www.cinestar.com.pe/promociones">Promociones</a></li>
		        	<li className="menu-item"><a href="http://www.cinestar.com.pe/cinefilo_star">Blog</a></li>
		    	</ul>
			</nav>
			<div className="slider">

			</div>
			<div className="papaya">
				<a href="http://www.cinepapaya.com/pe/cinestar" target="_blank"><img src="\src\img\varios\bg-papaya.jpg"/></a>
			</div>
		</header>
    </>
  )
}
