
import './Header.css';
import logo from '../../../public/logo.jpg'

const Header = () => {
  return (
    <>
      <header>
      <div className="header-content">
        <a href="/">
          <img src={logo} alt="Logo da Lumer Carimbos" />
        </a>
        <h1>Lumer Carimbos</h1>
      </div>
    </header>
       
       
      
    </>
  );
};

export default Header;
