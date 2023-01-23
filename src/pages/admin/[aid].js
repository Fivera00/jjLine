import { useRouter } from "next/router";
import Head from "next/head";
import ButtonAdd from "../../components/admin/buttonAdmin";
import TableProduct from "../../components/admin/tableProduct";
import Error404 from "../../components/categories/Error404";
import TableClient from "../../components/admin/tableClient";
import Sales from "../../components/admin/sales";
import NavbarAdmin from "../../components/admin/navbarAdmin";
import React, { useEffect } from "react";

const AdminDinamic = (props) => {
  const router = useRouter();
  const { aid } = router.query;

  useEffect(() => {
    const token = localStorage.getItem("account");
    if (!token) {
      router.push("/login");
    } else {
      const data = JSON.parse(token);
      console.log({ data });
      if (data.rol !== "admin") {
        router.push("/login");
      }
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Productos</title>
      </Head>
      <NavbarAdmin />
      <div>
        {aid === "productos" ? (
          <div style={{ margin: "0 0 20 20" }}>
            <h2>Listado de Productos</h2>
            <ButtonAdd />
            <TableProduct />
          </div>
        ) : aid === "clientes" ? (
          <div>
            <h2>Listado de Clientes</h2>
            <TableClient />
          </div>
        ) : aid === "ventas" ? (
          <div>
            <Sales />
          </div>
        ) : (
          <Error404 />
        )}
      </div>
    </div>
  );
};
export default AdminDinamic;
