import "./Profile.scss";

function Profile(props) {
  return (
    <div className="profile">
      <img src={props.image} alt="Something" />
      <p>{props.name}</p>
      <p className="role">{props.role}</p>
    </div>
  );
}

export default Profile;
