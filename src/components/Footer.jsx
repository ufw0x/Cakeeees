import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiWhatsappFill,
  RiYoutubeFill,
} from "react-icons/ri";


const Footer = () => {
  return (
    <footer id="footer" className="bg-white py-10 px-4">
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-black py-4 text-center mb-6">
        Happy Customers Bring Joyful Days!
      </h1>
      <div className="flex flex-wrap justify-center items-center md:flex-row md:space-x-4 flex-col mb-8">
        <div className="flex flex-col items-center mb-6">
        <p className="text-rose-600 font-bold pt-6 mb-2">Address:</p>
          <address className="text-black text-center">
            121/2, Lotus Street, Colombo
          </address>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-rose-600 font-bold mb-2">Contact Us:</p>
          <a className="text-black" href="#">010128109201902</a>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-rose-600 font-bold mb-2">Email Us:</p>
          <a className="text-black" href="#">cakeeees@clero.tech</a>
        </div>
      </div>
      <div className="flex space-x-8 text-5xl mb-10">
        <a href="#"><RiFacebookCircleFill  className="text-rose-600"/></a>
        <a href="#"><RiYoutubeFill  className="text-rose-600"/></a>
        <a href="#"><RiInstagramFill  className="text-rose-600" /></a>
        <a href="#"><RiWhatsappFill  className="text-rose-600"/></a>
      </div>
    </div>
    <p className="text-center text-black">
      &copy; {new Date().getFullYear()} All rights reserved by{" "}
      <a className="text-rose-600 font-bold" href="https://github.com/clerov">Sithika Dangampala</a>
    </p>
  </footer>
  
  );
};

export default Footer;
