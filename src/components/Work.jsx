import Button from "./Button";

const Work = (props) => {
  return (
    <section className="work animated">
      <h4>{props.data.title}</h4>
      <img src={props.data.image} alt={`image ${props.data.title}`} />
      <div className="buttonContainer">
        {props.data.technos.map((hashtag, i) => {
          return (
            <div className="hashtag animated" key={i}>
              {hashtag}
            </div>
          );
        })}
      </div>
      <div className="buttonContainer">
        <Button name="github" id={props.data.github} />
        <Button id={props.data.web} />
      </div>
    </section>
  );
};
export default Work;
