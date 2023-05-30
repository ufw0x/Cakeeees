import cakes from '../constants/products'
import Title from './Title';
import ProductCard from './productCard';

const ProductList = () => {
    return ( 
      <section className='bg-white z-50'>
        <Title title={"Our Delicious Cakes"}/>
         <div className='flex flex-row justify-center items-center flex-wrap'>
         {
            cakes.map(cake=>(
                <ProductCard
                image={cake.image}
                name={cake.name}
                price={cake.price}
                key={cake.price}
              />  
            ))
        }
       </div>
      </section>
     );
}
 
export default ProductList;