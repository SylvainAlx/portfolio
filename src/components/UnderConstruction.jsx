import { IoConstruct } from "react-icons/io5";
const UnderConstruction = ({ langage }) => {
  return (
    <div className="underConstruction animated">
      <IoConstruct />{" "}
      {langage === "french" ? "EN CONSTRUCTION" : "UNDER CONSTRUCTION"}
    </div>
  );
};
export default UnderConstruction;
