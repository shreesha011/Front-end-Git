import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/reading-upsert">
        <h6 className="mr-3">READING-UPSERT</h6>
      </Link>

      <Link to="/bill-upsert">
        <h6 className="mr-3">BILL-UPSERT</h6>
      </Link>

      <Link to="/payment">
        <h6>Payment</h6>
      </Link>
    </div>
  );
};
