import Link from "next/link";

const NotLoginGLobal = () => {
  return (
    <div className="not-login">
      <h2>Debes iniciar sesion primero.</h2>
      <p>
        Haz click <Link href="/login">aquí</Link> para iniciar sesión.
      </p>
    </div>
  );
};

export default NotLoginGLobal;
