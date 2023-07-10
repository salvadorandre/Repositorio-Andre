import "../Estilos/Encabezado.css";
function Encabezado() { 
    return(
        <div className="Contenedor-enca">
            <div className="titulo">
                <h1>Scarlett</h1>
            </div>
            <div className="menu">
                <nav className="menu-items">
                    <a className="inicio" href="#">Inicio</a>
                    <a href="#">Autoestima</a>
                    <a href="#">Narcismo</a>
                    <a href="#">Trastorno</a>
                    <a href="#">Amor</a>
                    <a href="#">Login</a>
                </nav>
            </div>
        </div>
    )
}

export default Encabezado;