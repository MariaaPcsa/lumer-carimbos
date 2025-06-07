 import './Home.css';
import '../../index.css';
import ProductCard from '../productcard/ProductCard';
import ProductsContainer from '../productsContainer/ProductsContainer';
 
 const Home = () => {
   return (
   
    <> 
    <div className='mensagem'>
      <p className='text'>Escolha o Produto  no Catálogo
e para compra entra em contato com a loja</p>
    </div>
   
   <ProductsContainer/>

     </>
   )
 }
 
 export default Home