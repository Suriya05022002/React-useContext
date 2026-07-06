
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>404 Error...</h1>
 <a className="btn btn-danger" href="/">Home</a>
      <Link className="btn btn-primary" to="/">
        Home
      </Link>
    </>
  );
}

export default NotFound;