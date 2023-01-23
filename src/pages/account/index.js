import Head from "next/head";
import { useRouter } from "next/router";

import Container from "../../components/Container";
import Footer from "../../components/footer";

import Profile from "../../components/account/profile";
import NotLoginGlobal from "../../components/notLoginGlobal";
import React from "react";
class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataProfile: [],
      logged: false,
    };
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("account"));
    if (data !== null && data.isLogin) {
      this.setState({ dataProfile: data, logged: data.isLogin });
    }

    try {
      // sube el scroll automaticamente :D
      document.documentElement.scrollTop = 0;
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { dataProfile, logged } = this.state;
    return (
      <Container>
        <Head>
          <title>Perfil</title>
        </Head>
        {logged ? <Profile data={dataProfile} /> : <NotLoginGlobal />}
        <Footer />
      </Container>
    );
  }
}

export default Account;
