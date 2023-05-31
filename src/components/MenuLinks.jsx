import PropTypes from 'prop-types'
const MenuLinks = ({setStatus}) => {
    return ( 
        <>
           <a href="#home" className="hover:text-rose-500 text-rose-500" onClick={(e)=>{
              document.body.style.overflowY = "unset"
              setStatus(false)
           }}>
                Home
              </a>
              <a href="#shop" className="hover:text-rose-500" onClick={(e)=>{
                  e.preventDefault()
                  document.body.style.overflowY = "unset"
                  setStatus(false)
                  location.href = "#shop"
              }}>
                Cakes
              </a>
              <a href="#testi" className="hover:text-rose-500" onClick={(e)=>{
                  document.body.style.overflowY = "unset"
                  setStatus(false)
              }}>
                Testimonial
              </a>
              <a href="#footer" className="hover:text-rose-500" onClick={(e)=>{
                  document.body.style.overflowY = "unset"
                  setStatus(false)
              }}>
                Contact
              </a>
        </>
     );
}
MenuLinks.propTypes = {
  setStatus:PropTypes.func
}
export default MenuLinks;