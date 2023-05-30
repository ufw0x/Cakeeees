import cakes from '../constants/products'
import Title from './Title';
import ProductCard from './productCard';

const ProductList = () => {
    return ( 
      <section className='bg-white z-50 px-[40px] md:px-[80px]'>
        <Title title={"Shop Our Sweets"}/>
         <div className='flex flex-row justify-center items-center flex-wrap py-10'>
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