import PropTypes from "prop-types";
const Title = ({ title }) => {
  return (
    <h1>
      <h1 className="text-black text-3xl font-extrabold z-40 relative">{title}</h1>
      <span className="w-16 h-2 bg-rose-500 relative z-30 p-1 rounded-sm bottom-[9.5px] block"></span>
    </h1>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
