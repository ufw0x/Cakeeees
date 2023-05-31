import { MdClose } from "react-icons/md";
import PropTypes from 'prop-types'
import MenuLinks from './MenuLinks'

const Menu = ({setStatus}) => {
    return ( 
        <>
        <aside className="w-full h-full min-h-screen bg-[#ffffff6d] backdrop-blur-2xl fixed top-0 left-0 z-50">
            <MdClose className="float-right m-10 text-3xl" role="button" onClick={()=>{
                document.body.style.overflowY = "unset"
                setStatus(false)
            }
            }/>
            <div className="flex flex-col justify-center items-center py-20 text-lg  mt-20 px-10 space-y-7">
              <MenuLinks setStatus={setStatus}/>
            </div>
          </aside>
        </>
     );
}

Menu.propTypes = {
    setStatus:PropTypes.func
}
export default Menu;
