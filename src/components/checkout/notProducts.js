import Link from "next/link";

const NotProducts = () => {
  return (
    <div className="not-login">
      <h2>
        No existen items añadidos al carritos para poder realizar el Checkout.
      </h2>
      <p>
        Haz click <Link href="/">aquí</Link> para revisar los productos.
      </p>
    </div>
  );
};

export default NotProducts;
