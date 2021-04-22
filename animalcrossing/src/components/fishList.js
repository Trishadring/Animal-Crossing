

function FishList({id, fish_name, price, img, location, shadow_size, time }) {
  function caught() {
    var checkBox = document.getElementById(`${id}_checkbox`);
    var tableLine = document.getElementById(`${id}`);
    if (checkBox.checked === true){
      tableLine.classList.add("checked");
    }
  }
  return (
    <tr id={id} onClick={caught}>
      
      <td><img className="photo" src={`/imgs${img}`} alt={fish_name}/></td>
      <td className="name">{fish_name}</td>
      <td>{price}</td>
      <td>{location}</td>
      <td>{shadow_size}</td>
      <td className="d-none d-md-table-cell">{time}</td>
      <td><input className="form-check-input" type="checkbox" id={`${id}_checkbox`} value="" aria-label="..."/>
      </td>
    </tr>
  );
}

export default FishList;
