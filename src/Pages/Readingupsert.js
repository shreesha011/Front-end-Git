import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReadingAction } from "../redux/store";

import { useHistory } from "react-router-dom";

export const Readingupsert = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  function handleSubmit(e) {
    e.preventDefault();
    // axios http post .. on success handler -> history.push("/bill-upsert")
    // history.push("/bill-upsert");
    dispatch(
      createReadingAction({
        connection: { connectionId },
        readingDate,
        unitsConsumed,
      })
    );
    setConnectionId("");
    setReadingDate("");
    setUnitsConsumed("");
    history.push("/bill-upsert");
  }

  const [connectionId, setConnectionId] = useState("");
  const [readingDate, setReadingDate] = useState("");
  const [unitsConsumed, setUnitsConsumed] = useState("");

  const updateConnectionId = (e) => setConnectionId(e.target.value);
  const updateReadingDate = (e) => setReadingDate(e.target.value);
  const updateUnitsConsumed = (e) => setUnitsConsumed(e.target.value);

  const addRegistration = () => {
    dispatch(
      createReadingAction({
        connection: { connectionId },
        readingDate,
        unitsConsumed,
      })
    );

    //set clear form
    setConnectionId("");
    setReadingDate("");
    setUnitsConsumed("");
  };

  return (
    <div>
      <div className="alert alert-secondary">
        <h3>Reading Create</h3>
      </div>
      {/* onSubmit={handleSubmit} */}
      <form className="mx-4">
        <div>
          <input
            type="text"
            value={connectionId}
            onChange={updateConnectionId}
            className="form-control form-control-lg mb-1"
            placeholder="ConnectionId"
          />
        </div>

        <div>
          <input
            type="date"
            value={readingDate}
            onChange={updateReadingDate}
            className="form-control form-control-lg mb-1"
            placeholder="readingDate"
          />
        </div>

        <div>
          <input
            type="text"
            value={unitsConsumed}
            onChange={updateUnitsConsumed}
            className="form-control form-control-lg mb-1"
            placeholder="Units Consumed"
          />
        </div>

        <div>
          <input
            type="submit"
            value="submit"
            onClick={handleSubmit}
            className="btn btn-lg btn-secondary w-100"
          />
        </div>
      </form>
    </div>
  );
};
