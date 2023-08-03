import "./Logo.css"

function Logo({className}) {
  return (
    <div className={`logo ${className ? `${className}` : ''}`}></div>
  );
}

export default Logo;