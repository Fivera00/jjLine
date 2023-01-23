import Head from "next/head";
import { useRouter } from "next/router";

import dataLocal from "../../../public/api/db.json";

import Container from "../../components/Container";
import NotFound from "../../components/search/notFound";
import SearchProduct from "../../components/search/searchProduct";
import Footer from "../../components/footer";

const Search = ({ search }) => {
  const router = useRouter();
  const { sid } = router.query;

  try {
    // sube el scroll automaticamente :D
    document.documentElement.scrollTop = 0;
  } catch (error) {
    console.log(error);
  }

  return (
    <Container>
      <Head>
        <title> {sid}</title>
      </Head>
      <div className="header-search">
        <h1>Buscar</h1>
        <div className="line" />
      </div>
      {sid === "pizza" ? (
        <NotFound searchTerm={sid} />
      ) : (
        <SearchProduct data={search} />
      )}
      <Footer />
    </Container>
  );
};

Search.getInitialProps = async (ctx) => {
  const data = await dataLocal.search;

  return { search: data };
};

export default Search;
