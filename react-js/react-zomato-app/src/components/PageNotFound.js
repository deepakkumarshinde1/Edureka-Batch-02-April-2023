import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <h1 className="display-1 text-center">Page is not-available</h1>
      <p className="text-center fw-bold h1 text-danger">
        The current page is not available
      </p>
      <p className="text-center fw-bold h1 text-green">
        CLICK{" "}
        <Link to="/" className="text-primary">
          HERE
        </Link>{" "}
        to get HOME page
      </p>
    </>
  );
};

export default PageNotFound;
