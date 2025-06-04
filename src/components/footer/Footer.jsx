
import './Footer.css';
import '../../index.css';

 const Footer = () => {
   return (
    <footer>
<section>
    <ul>
        <li>
            <a href="#" target="_blank" rel="noopener noreferrer"  aria-label="Facebook"></a>
            <img src= "/facebook_log.png"alt="ImgFacebook" />
        </li>
        <li>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok"></a>
            <img src= "/imag-tik-tok.jpg"alt="imagTikTok" />
        </li>
        <li>
            <a href="#" target="_blank" rel="noopener noreferrer"  aria-label="YouTube"></a>
            <img src="/imag-YouTube.jpg" alt="imagYouTube" />
        </li>
        <li>
            <a href="https://wa.me/5511952274858" target="_blank" rel="noopener noreferrer" aria-label="whatsapp"></a>
            <img src= "/imagwhatsapp.jpg"alt="imagwhatsapp" />
        </li>
        <li>
            <a href="#" target="_blank" rel="noopener noreferrer"></a>
            <img src= "/instagram.jpg"alt="instagram" />
        </li>
    </ul>
</section>
<section>
     <address>
              <p>Endereço: Primeiro de Maio, 138 - Jardim Sao Jose, Francisco Morato - SP, 07911-030, Brazil </p>
            </address>
            
          
          <p>&copy; 2025 Lumer Carrimbos - Todos os direitos reservados.</p>
</section>

    </footer>
     
   )
 }
 
 export default Footer