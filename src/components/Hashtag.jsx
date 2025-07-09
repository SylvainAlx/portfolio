import { IoIosFlask } from "react-icons/io";

const Hashtag = (props) => {
  return (
    <div className="hashtag">
      <IoIosFlask className="hashtagIcon" />
      <span>{props.content}</span>
    </div>
  );
};

export default Hashtag;
