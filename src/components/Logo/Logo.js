import { Link } from "react-router-dom";
import "./Logo.css"

function Logo({className}) {
  return (
    <Link to="/">
      <div className={`logo ${className ? `${className}` : ''}`}></div>
    </Link>
  );
}

export default Logo;