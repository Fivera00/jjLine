import Head from "next/head";

import Container from "../components/Container";
import Footer from "../components/footer";
import Loader from "../components/loader";

import EmptyCart from "../components/cart/emptyCart";
import ItemCart from "../components/cart/itemCart";
import Router, { useRouter } from "next/router";
import React from "react";
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      subtotal: 0,
      loading: true,
    };
  }

  componentDidMount() {
    this.loadCart();

    // sube el scroll automaticamente :D
    document.documentElement.scrollTop = 0;
  }

  loadCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart !== null) {
      if (cart.items.length === 0) {
        let element = document.getElementById("point-cart");
        element.classList.remove("point");
      }
      let subt = this.getSubtotal(cart.items);
      this.setState({ items: cart.items, subtotal: subt, loading: false });
    } else {
      this.setState({ items: [], loading: false });
    }
  };

  getSubtotal = (array) => {
    let total = 0;
    array.forEach((element) => {
      total += element.total;
    });
    return total.toFixed(2);
  };

  handleDelete = (index, e) => {
    this.deleteItem(index);
    this.loadCart();
  };

  deleteItem = (index) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.items.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  handleChangeCount = (num, total, index) => {
    console.log("handleChangeCount", num);
    this.updateSubtotal(num, total, index);
    this.loadCart();
  };

  updateSubtotal = (num, total, index) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.items[index].count = num;
    cart.items[index].total = total;
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  handleContinueBuy = (e) => {
    Router.push("/");
  };

  handleGoCheckout = (e) => {
    Router.push("/checkout");
  };

  render() {
    const { items, subtotal, loading } = this.state;
    console.log("RENDER", items);
    return (
      <Container>
        <Head>
          <title>Carrito</title>
        </Head>

        <div className="cart-title">
          <h1>Carrito de compra</h1>
        </div>

        <div
          className={"cart-body " + (items.length !== 0 ? "" : "hide-border")}
        >
          {items.length === 0 && loading ? (
            <Loader />
          ) : items.length !== 0 && !loading ? (
            items.map((product, id) => (
              <ItemCart
                data={product}
                key={id}
                id={id}
                callback={this.handleDelete.bind(this)}
                changeCount={this.handleChangeCount.bind(this)}
              />
            ))
          ) : (
            <EmptyCart />
          )}
        </div>

        <div className={"cart-end " + (items.length !== 0 ? "" : "hide")}>
          <div className="cart-subtotal">
            <h2>Subtotal</h2>
            <p>${subtotal}</p>
          </div>

          <div className="cart-buttons">
            <button onClick={(e) => this.handleContinueBuy(e)}>
              Seguir Comprando
            </button>
            <button onClick={(e) => this.handleGoCheckout(e)}>
              Finalizar Compra
            </button>
          </div>
        </div>

        <Footer />
      </Container>
    );
  }
}

// Cart.getInitialProps = async (ctx) => {
//     const cart = JSON.parse(window.localStorage.getItem('cart')) || []
//     console.log("Items madafoka",cart)
//     return { items: null }
// }

export default Cart;
