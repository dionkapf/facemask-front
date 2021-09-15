import "./Action.scss";

function Action(props) {
  return (
    <div className="action" onClick={props.onClick}>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <p>{props.text}</p>
      <span class="material-icons">{props.image}</span>
    </div>
  );
}

export default Action;
