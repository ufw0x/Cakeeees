import {MdShoppingBag, MdMenu} from 'react-icons/md'
const Navbar = () => {
    return ( 
        <nav className="w-full h-auto px-8 py-6 fixed top-0 left-0 backdrop-blur-xl z-10 bg-[#c8cac74a]">
            <div className="w-full h-auto flex flex-row justify-between container">
                <h1 className="text-black text-2xl font-bold font-nunito">Cake<span className="text-rose-500">ee</span>es</h1>
                <div className='flex-row space-x-6 mt-2 font-semibold hidden md:flex'>
                    <a href="" className='hover:text-rose-500 text-rose-500'>Home</a>
                    <a href="" className='hover:text-rose-500'>Cakes</a>
                    <a href="" className='hover:text-rose-500'>Testimonial</a>
                    <a href="" className='hover:text-rose-500'>Contact</a>
                </div>
                <div className='flex flex-row space-x-2 text-3xl pt-1 text-rose-500'>
                    <MdShoppingBag role='button' className='text-rose-500'/>
                    <MdMenu role='button' className='text-black md:hidden'/>
                 </div>
            </div>
        </nav>
     );
}
 
export default Navbar;