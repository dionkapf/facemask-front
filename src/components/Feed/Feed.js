import "./Feed.scss";
import test_image from "./../../assests/test-image.jpg";

function Feed() {
  return (
    <div className="feed">
      <img src={test_image} alt="Test" />
    </div>
  );
}

export default Feed;
