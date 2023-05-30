import PropTypes from 'prop-types'
const Title = ({title}) => {
  return (
    <h1 className="text-black text-3xl font-extrabold">
      {title}
      <span className="w-16 h-2 bg-rose-500 relative p-1 bottom-[9.5px] block"></span>
    </h1>
  );
};

Title.propTypes = {
    title:PropTypes.string
}

export default Title;
