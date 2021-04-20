import FishList from "./fishList";

const Fish = (props) => {

  const allFish = props.fish.map((m,i) => <FishList key={m.id} {...m} /> )

  return (
    <table id="tablePreview" className="table table-striped">
			<thead>
				<tr>
					<th></th>
					<th>Name</th>
					<th>Price</th>
					<th>Location</th>
					<th>Shadow Size</th>
					<th className="d-none d-md-table-cell">Avaliable</th>
				</tr>
			</thead>
			<tbody>
      	 {allFish} 
			</tbody>
			</table>
  );
}

export default Fish;