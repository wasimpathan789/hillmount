import "./Add.css";
import { BsPlus } from "react-icons/bs";

const Add = ({ title }) => {
  return (
    <div className="add-container">
      <p>
        <BsPlus size={30} />
      </p>
      <span>{title}</span>
    </div>
  );
};

export default Add;
