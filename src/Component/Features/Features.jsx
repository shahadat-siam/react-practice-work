import PropTypes from "prop-types";
import { FaCircleCheck } from "react-icons/fa6";
const Features = ({feature}) => {
    return (
        <div className="text-start py-1">
            <p className="text-2xl text-[#FBF3D5] font-semibold flex items-center"><FaCircleCheck className="text-green-400 pr-2" /> {feature}</p>
        </div>
    );
};
Features.propTypes = {
    feature: PropTypes.string
  };
export default Features;