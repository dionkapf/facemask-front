import "./About.scss";
import Profile from "./../../components/Profile/Profile";
import issa from "./../../assests/issa.jfif";
import salum from "./../../assests/salum.jfif";
import brian from "./../../assests/brian.jfif";
import dion from "./../../assests/dion.jpg";

function About() {
  return (
    <div className="about">
      <Profile name="Dion Kapfumvuti" role="Front End Dev" image={dion} />
      <Profile name="Salum Matope" role="Back End Dev" image={salum} />
      <Profile name="Issa Mhando" role="Data Engineer" image={issa} />
      <Profile name="Brian Temu" role="Model Engineer" image={brian} />
    </div>
  );
}

export default About;
