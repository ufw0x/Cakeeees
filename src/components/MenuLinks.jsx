import PropTypes from "prop-types";
const MenuLinks = ({ setStatus }) => {
  return (
    <>
      <a
        href="#home"
        className="hover:text-rose-500 text-rose-500"
        onClick={(e) => {
          document.body.style.overflowY = "unset";
          setStatus(false);
          document.querySelector(e.currentTarget.href).scrollIntoView();
          e.preventDefault();
        }}
      >
        Home
      </a>
      <a
        href="#shop"
        className="hover:text-rose-500"
        onClick={(e) => {
          document.body.style.overflowY = "unset";
          setStatus(false);
          document.querySelector(e.currentTarget.href).scrollIntoView();
          e.preventDefault();
        }}
      >
        Cakes
      </a>
      <a
        href="#testi"
        className="hover:text-rose-500"
        onClick={(e) => {
          document.body.style.overflowY = "unset";
          setStatus(false);
          document.querySelector(e.currentTarget.href).scrollIntoView();
          e.preventDefault();
        }}
      >
        Testimonial
      </a>
      <a
        href="#footer"
        className="hover:text-rose-500"
        onClick={(e) => {
          document.body.style.overflowY = "unset";
          setStatus(false);
          document.querySelector(e.currentTarget.href).scrollIntoView();
          e.preventDefault();
        }}
      >
        Contact
      </a>
    </>
  );
};
MenuLinks.propTypes = {
  setStatus: PropTypes.func,
};
export default MenuLinks;
