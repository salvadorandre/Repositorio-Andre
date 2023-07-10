import "../Estilos/Pie.css";
import { CgFacebook, CgInstagram, CgTwitter } from "react-icons/cg"; 
function Pie() { 

    return(
        <div className="Pie">
            <div className="redes-Sociales">
                <CgFacebook className="icono"></CgFacebook>
                <CgInstagram className="icono"></CgInstagram>
                <CgTwitter className="icono"></CgTwitter>
            </div>
        </div>
    )
}

export default Pie; 