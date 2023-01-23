import Link from "next/link";

const NotLogin = () => {
  return (
    <div className="not-login">
      <h2>Para completar la compra primero debes iniciar sesion.</h2>
      <p>
        Haz click <Link href="/login">aquí</Link> para iniciar sesión.
      </p>
    </div>
  );
};

export default NotLogin;
