

function BugList({id, bug_name, price, img, location, time }) {

  return (
    <tr id={id}>
      <td><img className="photo" src={`/imgs/${img}`} alt={bug_name}/></td>
      <td className="name">{bug_name}</td>
      <td>{price}</td>
      <td>{location}</td>
      <td className="d-none d-md-table-cell">{time}</td>
    </tr>
  );
}

export default BugList;
