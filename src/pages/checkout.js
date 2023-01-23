import Head from "next/head";

import Container from "../components/Container";
import Footer from "../components/footer";

import InfoContact from "../components/checkout/infoContact";
import SummaryOrder from "../components/checkout/summaryOrder";
import NotLogin from "../components/checkout/notLogin";
import NotProducts from "../components/checkout/notProducts";
import React from "react";
class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLogin: false,
    };
  }

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const data = JSON.parse(localStorage.getItem("account"));

    if (cart !== null) {
      this.setState({ items: cart.items });
    }

    if (data !== null && data.isLogin) {
      this.setState({ isLogin: data.isLogin });
    }

    document.documentElement.scrollTop = 0;
  }

  render() {
    const { items, isLogin } = this.state;
    return (
      <Container>
        <Head>
          <title>Checkout</title>
        </Head>

        {isLogin && items.length === 0 ? (
          <NotProducts />
        ) : isLogin && items.length !== 0 ? (
          <div className="checkout">
            <InfoContact />
            <SummaryOrder data={items} />
          </div>
        ) : (
          <NotLogin />
        )}

        <Footer />
      </Container>
    );
  }
}

export default Checkout;
