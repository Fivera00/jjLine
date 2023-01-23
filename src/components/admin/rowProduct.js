const RowProduct = (props) => {
  return (
    <tr>
      <th scope="row">{props.lot}</th>
      <td>
        <svg viewBox="0 0 24 24" className="svg">
          <path d={props.icon} />
        </svg>
      </td>
      <td>{props.name} </td>
      <td>{props.price}</td>
      <td>{props.state}</td>
      <td>
        <div className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Editar
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a className="dropdown-item" href="#">
              Ingresar
            </a>
            <a className="dropdown-item" href="#">
              Modificarn
            </a>
            <a className="dropdown-item" href="#">
              Sacar de stock
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
};
export default RowProduct;
