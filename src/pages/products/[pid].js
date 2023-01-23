import Head from "next/head";
import { useRouter } from "next/router";

import dataLocal from "../../../public/api/db.json";

import Container from "../../components/Container";
import Footer from "../../components/footer";
import CarouselProduct from "../../components/products/carouselProduct";
import Description from "../../components/products/description";
import RelatedProducts from "../../components/products/relatedProducts";
import NotFoundProduct from "../../components/products/notFound";

const Products = ({ product, related }) => {
  const router = useRouter();
  const { pid } = router.query;

  try {
    // sube el scroll automaticamente :D
    document.documentElement.scrollTop = 0;
  } catch (error) {
    console.log(error);
  }

  return (
    <Container>
      <Head>
        <title> {pid}</title>
      </Head>
      {product[0] !== undefined ? (
        <div className="product">
          <CarouselProduct images={product[0].arrayImg} />
          <Description
            name={product[0].name}
            price={product[0].price}
            colors={product[0].colors}
            description={product[0].description}
            img={product[0].img}
          />
        </div>
      ) : (
        <NotFoundProduct />
      )}

      <div>
        <RelatedProducts data={related} />
      </div>
      <Footer />
    </Container>
  );
};

Products.getInitialProps = async (ctx) => {
  // console.log("CTX get initial", ctx.query.pid)
  const relatedData = await dataLocal.related;

  const found = await dataLocal.products.filter(function (item) {
    return item.name == ctx.query.pid;
  });
  return { product: found, related: relatedData };
};

export default Products;
