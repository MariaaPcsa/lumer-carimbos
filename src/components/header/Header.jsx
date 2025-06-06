import { Link } from 'react-router-dom';
import './Header.css';
import '../../index.css';


const Header = () => {
  return (
    <>
      <header>
      <div className="header-content">
        <a href="/">
          <img src="/logo.jpg" alt="Logo da Lumer Carimbos" />
        </a>
        <h1>Lumer Carimbos</h1>

       
              <ul>
                <li><Link to="/">Home</Link></li>
               
                <li><Link to="/history">Nossa Essência</Link></li>
               
                <li><Link to="/location">Localização</Link></li>
              </ul>
          
        
        
      </div>
    </header>
       
       
      
    </>
  );
};

export default Header;
