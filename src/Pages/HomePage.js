import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="d-flex flex-row mt-5 mb-5">
      <Link to="/reading-upsert">
        <div className="card-body mt-5 w-30">
          <h5 className="card-title">READING-PAGE</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </Link>

      <Link>
        <div className="card-body mt-5 w-30">
          <Link to="/bill-upsert">
            <h5 className="card-title">BILL-PAGE</h5>
          </Link>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </Link>
    </div>
  );
};
