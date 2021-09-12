import "./App.scss";
import Action from "./components/Action/Action";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="title">
          <p>BAYESIANS</p>
          <h3>Face Mask Detection</h3>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="news.asp">Project</a>
            </li>
            <li>
              <a href="about.asp">About Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="body">
        <div className="actions">
          <Action text="CAMERA" image="photo_camera" />
          <Action text="UPLOAD" image="cloud_upload" />
        </div>
        <Feed />
      </div>
    </div>
  );
}

export default App;
