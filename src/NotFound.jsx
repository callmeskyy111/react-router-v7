//! 404 Page.. a.k.a PAGE NOT FOUND

import { Link } from "react-router";

function NotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Page Not Found</h1>
      <div>
        <Link to="/">Go To Home</Link>
      </div>
      <img
        src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found-1536x864.png"
        style={{ width: "50%" }}
      />
    </div>
  );
}

export default NotFound;
