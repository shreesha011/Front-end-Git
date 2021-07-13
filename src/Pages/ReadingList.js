import { useSelector } from "react-redux";

export const ReadingList = () => {
  const state = useSelector((state) => state);

  return (
    <div>
      <div className="alert alert-secondary">
        <h3>Reading List</h3>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">connectionId</th>
            <th scope="col">readingDate</th>
            <th scope="col">unitsConsumed</th>
          </tr>
        </thead>
        <tbody>
          {state.readingList.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.readingDate}</td>

              <td>{item.unitsConsumed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
