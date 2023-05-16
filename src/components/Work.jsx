import Button from "./Button";
import Hashtag from "./Hashtag";

const Work = (props) => {
  return (
    <section className="work animated">
      <h4>{props.data.title}</h4>
      <p>{props.data.description}</p>
      <img src={props.data.image} alt={`image ${props.data.title}`} />
      <div className="buttonContainer">
        {props.data.technos.map((hashtag, i) => {
          return <Hashtag key={i} content={hashtag} />;
        })}
      </div>
      <div className="buttonContainer">
        <Button name="github" id={props.data.github} />
        {props.data.web && <Button id={props.data.web} />}
      </div>
    </section>
  );
};
export default Work;
