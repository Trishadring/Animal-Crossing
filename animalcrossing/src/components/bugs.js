import BugList from "./bugList"

const Bugs = (props) => {

  const allBugs = props.bugs.map((m,i) => <BugList key={m.id} {...m} /> )
  return (
    <table id="tablePreview" className="table table-striped">
      <thead>
        <tr>
          <th>Caught</th>
          <th></th>
          <th>Name</th>
          <th>Price</th>
          <th>Location</th>
          <th className="d-none d-md-table-cell">Avaliable</th>
        </tr>
      </thead>

      <tbody>
        {allBugs}
      </tbody>
      
      </table>
  );
}

export default Bugs;