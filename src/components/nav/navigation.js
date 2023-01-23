import Link from "next/link";
import React from "react";
import Router, { useRouter } from "next/router";

import ProfileOptions from "./profileOptions";
import SlideBar from "./slideBar";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      category: null,
      emptyCart: true,
    };
  }

  componentDidMount() {
    this.setState({ category: this.props.category });
    // if(this.props.id != undefined){
    //     this.setState({category: this.props.id})
    // }
    this.isLogin();
    this.emptyCart();
  }

  emptyCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart !== null) {
      if (cart.items.length !== 0) {
        this.setState({ emptyCart: false });
      } else {
        this.setState({ emptyCart: true });
      }
    } else {
      this.setState({ emptyCart: true });
    }
  };

  isLogin() {
    const data = JSON.parse(localStorage.getItem("account"));
    console.log("data profile nav ", data);
    if (data !== null && data.isLogin) {
      this.setState({ logged: data.isLogin });
    }
  }

  handleNav = (cat) => {
    this.setState({ category: cat });
    // Router.push('/categories/[id]', `/categories/${category}`)

    // console.log("ACTIVEEEE ", this.state.active)
    this.selectNav(cat);
  };

  selectNav = (id) => {
    Router.push("/categories/[id]", `/categories/${id}`);
  };

  search(e) {
    e.preventDefault();
    const item_search = document.getElementById("searchNav").value;
    Router.push("/search/[sid]", `/search/${item_search}`);
  }

  searchCollapse(e) {
    e.preventDefault();
    const item_search = document.getElementById("iSearchCollapse").value;
    Router.push("/search/[sid]", `/search/${item_search}`);
  }

  render() {
    return (
      <header className="navBar align-items-center">
        <div className="toogle-icon">
          <SlideBar />
        </div>

        <div className="title">
          <h2>
            <Link href="/">JJLine</Link>
          </h2>
        </div>
        <ul className="items-group justify-content-center">
          <li onClick={() => this.handleNav("hombre")}>
            <a className={this.state.category === "hombre" ? "active" : ""}>
              HOMBRE
            </a>
          </li>
          <li onClick={() => this.handleNav("mujer")}>
            <a className={this.state.category === "mujer" ? "active" : ""}>
              MUJER
            </a>
          </li>
          <li onClick={() => this.handleNav("niños")}>
            <a className={this.state.category === "niños" ? "active" : ""}>
              NIÑOS
            </a>
          </li>
          <li onClick={() => this.handleNav("accesorios")}>
            <a className={this.state.category === "accesorios" ? "active" : ""}>
              ACCESORIOS
            </a>
          </li>
        </ul>
        <div className="input-search">
          <form onSubmit={(e) => this.search(e)}>
            <input
              id="searchNav"
              placeholder="Buscar"
              aria-label="Buscar prenda"
            />
          </form>
        </div>
        <div className="nav-icons">
          <div className="search-icon">
            <img
              data-toggle="collapse"
              data-target="#searchCollapse"
              aria-expanded="false"
              aria-controls="searchCollapse"
              src="/buscar.svg"
              alt="Buscar"
            />
          </div>
          <div className="cart-icon">
            <Link href="/cart">
              <img src="/cart.svg" alt="Carrito" />
            </Link>
            <div
              id="point-cart"
              className={this.state.emptyCart ? "" : "point"}
            />
          </div>

          <div className="login-icon">
            {this.state.logged ? (
              <ProfileOptions />
            ) : (
              <Link href="/login">
                <img src="/user.svg" alt="Perfil" />
              </Link>
            )}
          </div>
        </div>
        <div className="collapse style-collapse" id="searchCollapse">
          <div className="body-collapse">
            <form onSubmit={(e) => this.searchCollapse(e)}>
              <input
                id="iSearchCollapse"
                placeholder="Buscar en nuestra tienda"
                aria-label="Buscar prenda"
              />
              <button className="btn" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </header>
    );
  }
}

export default Navigation;
