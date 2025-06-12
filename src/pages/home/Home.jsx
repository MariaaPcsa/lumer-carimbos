 import './Home.css';
import '../../index.css';
import ProductCard from '../productcard/ProductCard';
import ProductsContainer from '../productsContainer/ProductsContainer';
 
 const Home = () => {
   return (
   
    <> 
     <h2 className='title'>Catálogo</h2>
    <div className='mensagem'>
      <p className='text'>Escolha o produto no nosso catálogo e entre em contato para realizar a compra. Fazemos carimbos de todos os tipos, personalizados conforme a sua necessidade!</p>
        <p className='text'>Ah, e caso tenha dúvidas sobre fonte, tamanho ou modelo, você contará com um especialista que lhe indicará a melhor opção de acordo com a sua necessidade.</p>
    </div>
  
   <ProductsContainer/>

     </>
   )
 }
 
 export default Home