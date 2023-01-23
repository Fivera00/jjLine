import Link from "next/link";
import Router, { useRouter } from "next/router";
const NavbarAdmin = () => {
  const handleNav = (product) => {
    Router.push("/admin/[aid]", `/admin/${product}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="col-4">
        <Link href="/admin">
          {/* <a className="navbar-brand text-color" >Administrador</a> */}
          Administrador
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <ul
          className="navbar-nav d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <div className=" ">
            <li
              className="nav-item active"
              onClick={() => handleNav("productos")}
              style={{ cursor: "pointer" }}
            >
              <a className=" nav-link text-color">
                Productos
                <span className="sr-only">(current)</span>
              </a>
            </li>
          </div>

          <div
            className="nav-item active"
            onClick={() => handleNav("clientes")}
            style={{ cursor: "pointer" }}
          >
            <li className="nav-item">
              <a className="nav-link text-color">Clientes</a>
            </li>
          </div>

          <div
            className="nav-item active"
            onClick={() => handleNav("ventas")}
            style={{ cursor: "pointer" }}
          >
            <li className="nav-item">
              <a className="nav-link text-color">Ventas</a>
            </li>
          </div>
          <div>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-color"
                style={{ marginRight: "20px" }}
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Opciones ...
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Historial
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Configuraciom
                </a>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};
export default NavbarAdmin;
