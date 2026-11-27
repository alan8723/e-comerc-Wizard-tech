import './Navbar.css';
import Widget from '../widget/Widget';

function Navbar(){

    return(
        
        <div className="navbar">
          <div className="navbar-brand">
              
              <a href="/">
                <h1>Wizard Tech</h1>
              </a>
          </div>

          <div className="navbar-links">
            <a href="/">Servicio técnico</a>
            <a href="/">Modulos</a>
            <a href="/">Accesorios</a>
            <a href="/">Contacto</a>
          </div>

          <Widget />
          
        </div>
    );

}

export default Navbar;