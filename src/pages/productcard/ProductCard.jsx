    import './ProductCard.css';
    import '../../index.css';

const ProductCard = ({ id, name, brand, price, image, }) => {
  return (
<> 
        

  
    
    <article className="product-card">
  
      <img
        src={image}
        alt={`Imagem do Produto ${id}`}
        className="product"
      />
       <div className="">
        <p className='info-brand'> {brand}</p>
        <p className='info-name'>{name}</p>
        {/* <p className='price'>R$ {price}</p> */}
      
<a href="https://wa.me/5511952274858" target="_blank" rel="noopener noreferrer" aria-label="whatsapp">
  <button>Contatar Loja</button>
</a>
      </div>
    </article>
    </>
  )
}

export default ProductCard

