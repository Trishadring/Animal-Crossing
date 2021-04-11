

function Critters({id, bug_name, price, location, time }) {

	
  return (
		<tr id={id}>
			{/* <td><img class="photo" src="{img}"/></td> */}
			<td className="name">{bug_name}</td>
			<td>{price}</td>
			<td>{location}</td>
			<td className="d-none d-md-table-cell">{time}</td>
			</tr>

  );
}

export default Critters;
