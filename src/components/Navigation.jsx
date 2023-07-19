import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about" state={{ 나는: "바보다" }}>
        About
      </Link>
    </div>
  );
}
export default Navigation;
