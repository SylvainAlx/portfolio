import { AiFillCaretLeft, AiFillCaretDown } from "react-icons/ai";

import "../assets/scss/Nav.scss";

const Nav = (props) => {
  const handleClick = () => {
    props.setShowNext(!props.showNext);
  };
  return (
    <nav>
      <div className="navButton">
        PONT INFÉRIEUR{" "}
        <AiFillCaretDown className="icon" onClick={handleClick} />
      </div>
    </nav>
  );
};

export default Nav;
