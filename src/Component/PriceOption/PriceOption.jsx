import PropTypes from "prop-types";
import Features from "../Features/Features";
const PriceOption = ({ option }) => {
  const { price, name, features } = option;
  return (
    <div className="bg-[#FDA403] flex flex-col p-5 rounded-lg">
      <h2>
        <span className="text-3xl font-semibold text-[#FBF3D5]">${price}</span>
        <span className="text-xl text-[#FBF3D5]">/mon</span>
      </h2>
      <h4 className="text-4xl font-bold mt-3 text-[#FBF3D5]">{name}</h4>
      <div className="mt-5 flex-grow">
        {features.map((feature, idx) => (
          <Features key={idx} feature={feature}></Features>
        ))}
      </div>
      <button className="text-3xl font-bold mt-5 hover:bg-green-400 duration-300  text-[#E8751A] rounded-2xl text-center bg-[#E5C287] w-full p-2">
        Bye Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
