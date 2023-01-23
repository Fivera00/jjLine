import React from "react";
class FilterC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  changeState = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <div className="panel-group filter ">
          <div className="colapsso custom-row" id="headingOne">
            <svg
              viewBox="0 0 24 24"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              onClick={() => this.changeState()}
              style={{ fill: this.state.isOpen ? "#9B51E0" : "#000" }}
            >
              <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
            </svg>
            <p
              className="font-weight-bold "
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              onClick={() => this.changeState()}
              style={{ color: this.state.isOpen ? "#9B51E0" : "#000" }}
            >
              FILTRAR BUSQUEDA
            </p>
          </div>
          <div
            id="collapseOne"
            className="container collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <ul className="colapsso custom-row">
              <div className="col-sm-3 ">
                <div className="input-group mb-3">
                  <div className="">
                    <label
                      className="input-group-text "
                      for="inputGroupSelect01"
                      aria-label="Select de  categoria"
                    >
                      Ordenar :
                    </label>
                  </div>
                  <select
                    className="custom-select"
                    id="inputGroupSelect01"
                    aria-label="Ordenar por"
                  >
                    <option selected>______________</option>
                    <option value="1">Precio</option>
                    <option value="2">Mas vendido</option>
                    <option value="3">Promocion</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-3 ">
                <div className="input-group mb-3">
                  <div className="">
                    <label
                      className="input-group-text"
                      for="inputGroupSelect02"
                      aria-label="filtrar por categoria"
                    >
                      Categorias:
                    </label>
                  </div>
                  <select
                    className="custom-select "
                    id="inputGroupSelect02"
                    aria-label="mostrar por categoria"
                  >
                    <option selected>______________</option>
                    <option value="1">Hombre</option>
                    <option value="2">Mujer</option>
                    <option value="3">Niños</option>
                    <option value="4">Accesorios</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-3 ">
                <div className="input-group mb-3">
                  <div className="">
                    <label
                      className="input-group-text"
                      for="inputGroupSelect03"
                      aria-label="filtrar por talla"
                    >
                      Talla :
                    </label>
                  </div>
                  <select
                    className="custom-select "
                    id="inputGroupSelect03"
                    aria-label="mostrar por tallas"
                  >
                    <option selected>______________</option>
                    <option value="1">S</option>
                    <option value="2">M</option>
                    <option value="3">L</option>
                    <option value="4">XL</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-3 ">
                <div className="input-group mb-3">
                  <div className="">
                    <label
                      className="input-group-text"
                      for="inputGroupSelect04"
                      aria-label="Filtrar por color"
                    >
                      Color :
                    </label>
                  </div>
                  <select
                    className="custom-select "
                    id="inputGroupSelect04"
                    aria-label="mostrar por color"
                  >
                    <option selected>______________</option>
                    <option value="1">Amarillo</option>
                    <option value="2">Azul</option>
                    <option value="3">Rojo</option>
                    <option value="4">Pastel</option>
                  </select>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default FilterC;
