import React from "react";

// datos locales en un archivo json, si todo esta en un json xD
import dataLocal from "../../public/api/db.json";

// Components
import Container from "../components/Container";
import Carousel from "../components/index/carousel";
import Category from "../components/index/category";
import Footer from "../components/footer";

const Index = (props: any) => {
  return (
    <Container>
      <Carousel />
      <div>
        <Category data={props.popular.male} gender={0} />
        <Category data={props.popular.female} gender={1} />
      </div>
      <Footer />
    </Container>
  );
};

Index.getInitialProps = async (ctx: any) => {
  const local = await dataLocal.popular;

  return { popular: local };
};

export default Index;
