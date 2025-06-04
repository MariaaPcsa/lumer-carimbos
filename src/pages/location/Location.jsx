 import './Location.css';
import '../../index.css';

const Location = () => {
  return (
    <>
      <div className="map-container">
        <h2>Localização</h2>
        <iframe
          src="https://www.google.com/maps?q=Primeiro+de+Maio,+138+-+Jardim+Sao+Jose,+Francisco+Morato+-+SP,+07911-030,+Brazil&output=embed"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: '10px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização no Google Maps"
        ></iframe>
      </div>

      <div className="button-container">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Primeiro+de+Maio,+138+-+Jardim+Sao+Jose,+Francisco+Morato+-+SP,+07911-030"
          target="_blank"
          rel="noopener noreferrer"
          className="map-button"
        >
          Abrir no Google Maps
        </a>
      </div>
  
    </>
  );
};

export default Location;

