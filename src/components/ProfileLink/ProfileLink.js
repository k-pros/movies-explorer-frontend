import { Link } from "react-router-dom";
import "./ProfileLink.css";

function ProfileLink() {
  return (
    <Link to="/profile" className="profile-link link">
      <p className="profile-link__desc">Аккаунт</p>
      <div className="profile-link__ico-wrapper">
        <div className="profile-link__ico"></div>
      </div>
    </Link>
  );
}

export default ProfileLink;
