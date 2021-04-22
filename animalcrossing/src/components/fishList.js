

function FishList({fish_num, fish_name, price, img, location, shadow_size, time }) {
  
  return (
    <tr id={fish_num}>
      <td><img className="photo" src={`/imgs/${img}`} alt={fish_name}/></td>
      <td className="name">{fish_name}</td>
      <td>{price}</td>
      <td>{location}</td>
      <td>{shadow_size}</td>
      <td className="d-none d-md-table-cell">{time}</td>
    </tr>
  );
}

export default FishList;
