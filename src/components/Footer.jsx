import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiWhatsappFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { map } from "../constants/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center p-10 text-center bg-transparent backdrop-blur-lg">
      <h1 className="w-full text-rose-500 py-4 text-3xl font-bold text-center">
        Happy Customer brings a happy day.
      </h1>
      <div className="flex flex-col justify-center items-center p-10">
      <img src={map} alt="Location in a map" className="w-[300px]" />
      <address className="text-rose-500 font-bold pt-4">121/2, Lotus Street, Colombo</address>
    </div>
      <div className="flex flex-row flex-wrap justify-center lg:justify-between text-center items-center w-full text-rose-500 font-bold">
        <div>
          Contact US: <a className="text-black" href="#">010128109201902</a>
        </div>
        <div>
          Email US:{" "}
          <a className="text-black"  href="mailto:byteblazedev@gmail.com">cakeeees@clero.tech</a>
        </div>

        <div className="flex flex-row text-5xl px-4 text-rose-500">
          <a href="#"><RiFacebookCircleFill /></a>
          <a href="#"><RiYoutubeFill /></a>
          <a href="#"><RiInstagramFill /></a>
         <a href="#"> <RiWhatsappFill /></a>
        </div>
      </div>
      <p className="text-ceter pt-10">&copy; {new Date().getFullYear()} All rights reserved by <a className="text-rose-500 font-bold" href="https://github.com/clerov">Sithika Dangampala</a></p>
    </footer>
  );
};

export default Footer;
