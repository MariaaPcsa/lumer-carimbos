
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
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/location">Localização</a>
          </li>
 <li>
            <a href="/history">Nossa Essência </a>
          </li>
         
           
         
        </ul>
        
      </div>
    </header>
       
       
      
    </>
  );
};

export default Header;
