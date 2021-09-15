import "./Feed.scss";
import { useState } from "react";
import test_image from "./../../assests/test-image.jpg";
import Webcam from "react-webcam";

function Feed(props) {
  const [showCamera, setShowCamera] = useState(props.camera);
  const [showImage, setShowImage] = useState(props.image);
  if (props.camera) setShowCamera(true);
  if (props.image) setShowImage(true);

  return (
    <div className="feed">
      {showCamera ? <Webcam /> : null}
      {showImage ? <img src={test_image} alt="Test" /> : null}
    </div>
  );
}

export default Feed;
