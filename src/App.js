import logo from "./logo.svg";

import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ReadingList } from "./Pages/ReadingList";
import { Readingupsert } from "./Pages/Readingupsert";
import { Billupsert } from "./Pages/Billupsert";
import { Payment } from "./Pages/Payment";

function App() {
  return (
    <Router>
      <div className="bg-dark text-light p-3 d-flex justify-content-between ">
        <Link to="/reading-upsert">
          <h6 className="mr-3">READING-UPSERT</h6>
        </Link>

        <Link to="/bill-upsert">
          <h6 className="mr-3">BILL-UPSERT</h6>
        </Link>

        <Link to="/reading-list">
          <h6 className="mr-3">Reading-List</h6>
        </Link>

        <Link to="/payment">
          <h6>Payment</h6>
        </Link>
      </div>

      <Route exact path="/" component={ReadingList} />
      <Route exact path="/reading-upsert" component={Readingupsert} />
      <Route exact path="/reading-list" component={ReadingList} />
      <Route exact path="/bill-upsert" component={Billupsert} />
      <Route exact path="/payment" component={Payment} />
    </Router>
  );
}

export default App;
