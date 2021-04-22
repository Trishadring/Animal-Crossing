

function BugList({id, bug_name, price, img, location, time }) {
  function caught() {
    var checkBox = document.getElementById(`${id}_checkbox`);
    var tableLine = document.getElementById(id);
    if (checkBox.checked === true){
      tableLine.style.display = "none";
    }
  }
  return (
    
    <tr id={id} onClick={caught}>
      <td><input className="form-check-input" type="checkbox" id={`${id}_checkbox`} value="" aria-label="..."/>
      </td>
      <td><img className="photo" src={`/imgs/${img}`} alt={bug_name}/></td>
      <td className="name">{bug_name}</td>
      <td>{price}</td>
      <td>{location}</td>
      <td className="d-none d-md-table-cell">{time}</td>
    </tr>
  );
}

export default BugList;
