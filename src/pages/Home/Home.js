import "./Home.scss";
import { useState } from "react";
import Action from "./../../components/Action/Action";
import test_image from "./../../assests/test-image.jpg";
import Webcam from "react-webcam";

function Home() {
  const [showCamera, setShowCamera] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const handleCamera = () => {
    setShowImage(false);
    setShowCamera(!showCamera);
  };
  function handleImage() {
    setShowCamera(false);
    setShowImage(!showImage);
  }
  return (
    <div className="body">
      <div className="actions">
        <Action text="CAMERA" image="photo_camera" onClick={handleCamera} />
        <Action text="UPLOAD" image="cloud_upload" onClick={handleImage} />
      </div>
      <div className="feed">
        {showCamera && <Webcam width="90%" height="80%" mirrored />}
        {showImage && <img src={test_image} alt="Test" />}
      </div>
    </div>
  );
}

export default Home;
