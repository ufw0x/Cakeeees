import {MdShoppingBag, MdOutlineSearch} from 'react-icons/md'
const Navbar = () => {
    return ( 
        <nav className="w-full h-auto px-8 py-6 fixed top-0 left-0 backdrop-blur-xl z-10 bg-[#c8cac74a]">
            <div className="w-full h-auto flex flex-row justify-between container">
                <h1 className="text-black text-4xl font-bold font-satisfy">Cake<span className="text-rose-500">ee</span>es</h1>
                <div className='flex flex-row space-x-6 mt-2 font-semibold'>
                    <a href="" className='hover:text-rose-500 text-rose-500'>Home</a>
                    <a href="" className='hover:text-rose-500'>Cakes</a>
                    <a href="" className='hover:text-rose-500'>Testimonial</a>
                    <a href="" className='hover:text-rose-500'>Contact</a>
                </div>
                <div className='flex flex-row space-x-2 text-3xl pt-1 text-rose-500'>
                    <MdOutlineSearch role='button'/>
                    <MdShoppingBag role='button'/>
                 </div>
            </div>
        </nav>
     );
}
 
export default Navbar;