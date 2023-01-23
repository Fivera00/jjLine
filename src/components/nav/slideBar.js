import Link from "next/link";
import Router from "next/router";
import React from "react";
import { slide as Menu } from "react-burger-menu";

class SlideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      logged: false,
    };
  }

  componentDidMount() {
    this.isLogin();
  }

  isLogin() {
    const data = JSON.parse(localStorage.getItem("account"));
    console.log("data nav ", data);
    if (data !== null && data.isLogin) {
      this.setState({ logged: data.isLogin });
    }
  }

  handleNav = (id) => {
    this.setState({ isOpen: true });

    Router.push("/categories/[id]", `/categories/${id}`);
    this.closeMenu();
  };

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  logout() {
    const data = JSON.parse(localStorage.getItem("account"));
    data.isLogin = false;

    const user = JSON.stringify(data);

    console.log(user);

    localStorage.setItem("account", user);
    Router.reload();
  }

  render() {
    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <h2>Tienda</h2>
        <h3
          onClick={(e) => this.handleNav("hombre")}
          id="hombre"
          className="menu-item"
        >
          Hombre
        </h3>
        <h3
          onClick={(e) => this.handleNav("mujer")}
          id="mujer"
          className="menu-item"
        >
          Mujer
        </h3>
        <h3
          onClick={(e) => this.handleNav("niños")}
          id="niños"
          className="menu-item"
        >
          Niños
        </h3>
        <h3
          onClick={(e) => this.handleNav("accesorios")}
          id="accesorios"
          className="menu-item"
        >
          Accesorios
        </h3>

        {this.state.logged ? (
          <div>
            <div>
              <Link href="/account">
                <h3 className="menu-item">Mi cuenta</h3>
              </Link>
            </div>
            <div>
              <h3 onClick={(e) => this.logout()} className="menu-item">
                Cerrar sesión
              </h3>
            </div>
          </div>
        ) : (
          <Link href="/login">
            <h3 className="menu-item">Iniciar Sesión</h3>
          </Link>
        )}
      </Menu>
    );
  }
}

export default SlideBar;
