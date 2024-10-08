import { Link } from "react-router-dom";
import displayImage from "../assets/woman.png";
function Body() {
  return (
    <div className="body">
      <div className="text">
        <h1>TRACOM ACADEMY</h1>
        <p>
          Tracom Academy specializes in web development training, empowering
          individuals with essential coding skills to build modern, responsive
          websites. Alongside education, Tracom is a leading payment solutions
          provider, integrating secure, efficient financial technologies. By
          merging tech education with real-world application
        </p>
        <button><Link to="/aboutUs" style={
          { textDecoration: 'none'}
        }>Learn More</Link></button>
      </div>
      <div className="picture">
        <img src={displayImage} alt="" />
      </div>
    </div>
  );
}

export default Body;
