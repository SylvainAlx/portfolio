import { IoIosFlask } from "react-icons/io";

const Hashtag = (props) => {
  return (
    <div className="hashtag animated">
      <IoIosFlask className="hashtagIcon" />
      {props.content}
    </div>
  );
};

export default Hashtag;
