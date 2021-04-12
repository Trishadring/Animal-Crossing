import Critters from "./critters"

const Bugs = (props) => {

  const allBugs = props.bugs.map((m,i) => <Critters key={m.id} {...m} /> )
  return (
    <table id="tablePreview" className="table table-striped">
			<thead>
				<tr>
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