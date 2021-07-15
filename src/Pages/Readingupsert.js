import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReadingAction } from "../redux/store";

import { useHistory } from "react-router-dom";

export const Readingupsert = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  //
  const formEl = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    // axios http post .. on success handler -> history.push("/bill-upsert")
    // history.push("/bill-upsert");

    const isFormValid = formEl.current.checkValidity();
    if (isFormValid) {
      dispatch(
        createReadingAction({
          connection: { connectionId },
          readingDate,
          unitsConsumed,
        })
      );
    } else {
      e.stopPropagation();
      // formEl.current.classList.add("was-validated");
      formEl.current.classList.add("was-validated");
    }

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

  const addRegistration = (e) => {
    const isFormValid = formEl.current.checkValidity();
    if (isFormValid) {
      dispatch(
        createReadingAction({
          connection: { connectionId },
          readingDate,
          unitsConsumed,
        })
      );
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }

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

      {state.progress && (
        <div className="mx-4 alert alert-success">Successful</div>
      )}

      {/* onSubmit={handleSubmit} */}
      <form ref={formEl} className="mx-4 needs-validation" noValidate>
        <div>
          <input
            type="text"
            value={connectionId}
            onChange={updateConnectionId}
            className="form-control form-control-lg mb-1"
            placeholder="ConnectionId"
            minLength="3"
            maxLength="30"
            required
          />
        </div>

        <div>
          <input
            type="date"
            value={readingDate}
            onChange={updateReadingDate}
            className="form-control form-control-lg mb-1"
            placeholder="readingDate"
            required
          />
        </div>

        <div>
          <input
            type="text"
            value={unitsConsumed}
            onChange={updateUnitsConsumed}
            className="form-control form-control-lg mb-1"
            placeholder="Units Consumed"
            minLength="3"
            maxLength="30"
            required
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
