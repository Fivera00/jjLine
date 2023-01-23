import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidEmailL: false,
      invalidPwdL: false,
    };
  }

  handleSignUp = (e) => {
    let btnSignUp = document.querySelector(".container-login");
    btnSignUp.classList.add("sign-up-mode");
  };

  handleSignIn = (e) => {
    let btnSignIn = document.querySelector(".container-login");
    btnSignIn.classList.remove("sign-up-mode");
  };

  change(event) {
    if (event.target != undefined) {
      let element = document.getElementById(event.target.id + "L");
      if (event.target.value != "") {
        element.classList.add("arriba");
      } else {
        element.classList.remove("arriba");
        element.classList.remove("invalid");
      }
    }
  }

  validateLogin = (email, pwd) => {
    let err = 0;
    if (email === "") {
      this.setState({ invalidEmailL: true });
      err++;
    }

    if (!/[a-zA-Z\d$@$!%*?&_\-]{8,50}$/.test(pwd)) {
      this.setState({ invalidPwdL: true });
      err++;
    }
    if (err == 0) {
      return true;
    } else {
      return false;
    }
  };

  login = (e) => {
    e.preventDefault();
    const email = document.getElementById("emailLogin").value;
    const pwd = document.getElementById("pwdLogin").value;
    //realizar fetch a login de backend
    //si el login es correcto, se redirecciona a la pagina principal
    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: pwd,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          localStorage.setItem("account", JSON.stringify(data.data));

          if (data.data.rol === "user") {
            Router.push("/");
          } else if (data.data.rol === "admin") {
            Router.push("/admin");
          } else {
            alert("Tu usuario o contraseña estan mal escritos, revisalos");
          }
        } else {
          alert("Usuario o contraseña incorrectos");
        }
      });
  };

  auth = (email, pwd) => {
    //const data = localStorage.getItem('account') || ''

    const data = JSON.parse(localStorage.getItem("account"));

    if (data !== null) {
      if (email === data.email && pwd === data.pwd) {
        data.isLogin = true;
        const user = JSON.stringify(data);
        console.log(user);

        localStorage.setItem("account", user);

        return true;
      } else {
        return false;
      }
    }
    return false;
  };

  register = (e) => {
    e.preventDefault();
    const aprove = document.getElementById("policy").checked;

    const firstName = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const pwd = document.getElementById("pwdRegister").value;

    if (aprove) {
      fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: firstName + " " + lastName,
          email: email,
          pass: pwd,
          rol: "user",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
            alert("Usuario registrado correctamente");
            localStorage.setItem("account", JSON.stringify(data.data));
            Router.push("/");
          } else {
            alert("El usuario ya existe");
          }
        });
    } else {
      alert(
        "Debe aceptar las politicas de privacidad y los terminos y condiciones para registrarse"
      );
    }
  };

  componentDidMount() {
    // mensajes de error personalizados
    // input password login
    var inpLogin = document.getElementById("pwdLogin");
    inpLogin.oninvalid = function (e) {
      e.target.setCustomValidity(
        "La contraseña debería tener al menos 8 caracter(es) al menos 1 dígito(s) al menos 1 minúscula(s)"
      );
    };
    inpLogin.oninput = function (e) {
      e.target.setCustomValidity("");
    };
    // input password register
    var inpRegister = document.getElementById("pwdRegister");
    inpRegister.oninvalid = function (e) {
      e.target.setCustomValidity(
        "La contraseña debería tener al menos 8 caracter(es) al menos 1 dígito(s) al menos 1 minúscula(s)"
      );
    };
    inpRegister.oninput = function (e) {
      e.target.setCustomValidity("");
    };
    // checkbox policy
    var policy = document.getElementById("policy");
    policy.oninvalid = function (e) {
      e.target.setCustomValidity(
        "Debe aceptar las politicas de privacidad y los terminos y condiciones para registrarse"
      );
    };
    policy.oninput = function (e) {
      e.target.setCustomValidity("");
    };
  }

  render() {
    return (
      <>
        <Head>
          <title>Iniciar Sesión | Registrarse</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        <main>
          <div className="container-login">
            <div className="forms-container">
              <div className="signin-signup">
                <form onSubmit={this.login} className="sign-in-form">
                  <h1 className="title-login">Iniciar Sesión</h1>
                  <div className="input-field">
                    <svg viewBox="0 0 24 24">
                      <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                    </svg>
                    <div className="group">
                      <label id="emailLoginL">Correo electrónico</label>
                      <input
                        onChange={this.change}
                        type="email"
                        id="emailLogin"
                        aria-label="Correo electrónico"
                        required
                      />
                    </div>
                  </div>

                  <div className="input-field">
                    <svg viewBox="0 0 24 24">
                      <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
                    </svg>
                    <div className="group">
                      <label id="pwdLoginL">Contraseña</label>
                      <input
                        onChange={this.change}
                        type="password"
                        id="pwdLogin"
                        aria-label="Contraseña"
                        pattern="^[a-zA-Z\d$@$!%*?_\-]{8,50}$"
                        required
                      />
                    </div>
                  </div>

                  <input
                    type="submit"
                    value="Iniciar Sesión"
                    className="btn solid"
                  />
                  <Link href="/">Volver a la tienda</Link>
                  <p className="social-text">
                    Síguenos o contactanos en nuestras redes sociales
                  </p>
                  <div className="social-media">
                    <a
                      className="social-icon"
                      href="http://bit.ly/3eZ1eXY"
                      target="_blank"
                      role="button"
                      aria-label="Whatsapp"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
                      </svg>
                    </a>
                    <a
                      className="social-icon"
                      href="https://www.facebook.com/"
                      target="_blank"
                      role="button"
                      aria-label="Facebook"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                      </svg>
                    </a>
                    <a
                      className="social-icon"
                      href="https://www.instagram.com/"
                      target="_blank"
                      role="button"
                      aria-label="Instagram"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                      </svg>
                    </a>
                  </div>
                </form>

                <form onSubmit={this.register} className="sign-up-form">
                  <h1 className="title-login">Registrate</h1>

                  <div className="input-field">
                    <svg viewBox="0 0 24 24">
                      <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                    </svg>
                    <div className="group">
                      <label id="nameL">Nombres</label>
                      <input
                        onChange={this.change}
                        type="text"
                        id="name"
                        aria-label="Nombres"
                        required
                      />
                    </div>
                  </div>

                  <div className="input-field">
                    <svg viewBox="0 0 24 24">
                      <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                    </svg>
                    <div className="group">
                      <label id="lastNameL">Apellidos</label>
                      <input
                        onChange={this.change}
                        type="text"
                        id="lastName"
                        aria-label="Apellidos"
                        required
                      />
                    </div>
                  </div>

                  <div className="input-field">
                    <svg viewBox="0 0 24 24">
                      <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                    </svg>
                    <div className="group">
                      <label id="emailL">Correo electrónico</label>
                      <input
                        onChange={this.change}
                        type="email"
                        id="email"
                        aria-label="Correo electrónico"
                        required
                      />
                    </div>
                  </div>

                  <div className="input-field">
                    <svg viewBox="0 0 24 24">
                      <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
                    </svg>
                    <div className="group">
                      <label id="pwdRegisterL">Contraseña</label>
                      <input
                        onChange={this.change}
                        type="password"
                        id="pwdRegister"
                        aria-label="Contraseña"
                        pattern="^[a-zA-Z\d$@$!%*?_\-]{8,50}$"
                        required
                        aria-required
                      />
                    </div>
                  </div>

                  <div className="checkbox-field">
                    <label>
                      <input
                        id="ads"
                        type="checkbox"
                        aria-label="Aceptas recibir correos electrónicos de nuestras ofertas"
                      />
                      <span>Recibir correos electrónicos de ofertas.</span>
                    </label>
                  </div>
                  <div className="checkbox-field">
                    <label>
                      <input
                        id="policy"
                        type="checkbox"
                        required
                        aria-label="Acepto la politica de privacidad y los terminos y condiciones"
                      />
                      <span>
                        Acepto la politica de privacidad y los terminos y
                        condiciones.*
                      </span>
                    </label>
                  </div>

                  <input type="submit" className="btn" value="Crear Cuenta" />
                  <Link href="/">Volver a la tienda</Link>
                </form>
              </div>
            </div>

            <div className="panels-container">
              <div className="panel left-panel">
                <div className="content">
                  <h2>¿Nuevo aqui?</h2>
                  <p>
                    Regístrate en nuestra página para poder realizar pedidos de
                    nuestra fantástica ropa.
                  </p>
                  <button
                    className="btn transparent"
                    id="sign-up-btn"
                    onClick={(e) => this.handleSignUp(e)}
                  >
                    Crear cuenta
                  </button>
                </div>
                <img src="log.svg" className="image" alt="Imagen login" />
              </div>

              <div className="panel right-panel">
                <div className="content">
                  <h2>¿Tienes cuenta?</h2>
                  <p>
                    Inicia sesión ahora en nuestra página y compra la ropa que
                    siempre deseaste lucir.
                  </p>
                  <button
                    className="btn transparent"
                    id="sign-in-btn"
                    onClick={(e) => this.handleSignIn(e)}
                  >
                    Iniciar Sesión
                  </button>
                </div>
                <img
                  src="register.svg"
                  className="image"
                  alt="Imagen registro"
                />
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Login;
