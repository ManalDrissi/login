import { Link } from "react-router-dom";

const css = {
  display: "inline-block",
  listStyleType: "none",
};

const nav = () => {
  return (
    <nav style={css}>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};
export default nav;
