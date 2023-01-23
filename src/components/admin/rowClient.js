const RowClient = (props) => {
  return (
    <tr>
      {/*<th scope="row">{props.name}</th>*/}
      <td>
        <img className="img-thumbnail" alt="" src={props.image}></img>
      </td>
      <td> {props.filname}</td>
      <td>{props.correo}</td>
      <td>{props.rol}</td>
      <td>{props.estado}</td>
    </tr>
  );
};
export default RowClient;
