import "./slice.css"

import Actitud from "../../../assests/images/branchs/ActitudFuncional.png";
import Aumla from "../../../assests/images/branchs/aumla.png";
import Zuca from "../../../assests/images/branchs/zuca.png";
import ZucarellitaNails from "../../../assests/images/branchs/zucarellitaNails.png";
const Slice = () => {
  const branchs = [Actitud, Aumla, Zuca, ZucarellitaNails];
  return (
    <div className="logos">
      <div className="logos-slice">
        {branchs.map((branch, index) => (
          <img src={branch} key={index} alt="Actitud"  className="branch" ></img>
        ))}
      </div>
    </div>
  );
};
export default Slice;
