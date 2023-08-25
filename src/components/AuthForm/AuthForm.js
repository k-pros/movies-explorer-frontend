import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./AuthForm.css";
import Login from "../Login/Login";
import Register from "../Register/Register";

function AuthForm({ onRegister, onLogin, isBtnLoading }) {
  const location = useLocation();
  return (
    <section className="auth-form">
      <Logo className="auth-form__logo" />
      {location.pathname === "/signin" && <Login onLogin={onLogin} isBtnLoading={isBtnLoading} />}
      {location.pathname === "/signup" && <Register onRegister={onRegister} isBtnLoading={isBtnLoading} />}
    </section>
  );
}

export default AuthForm;
