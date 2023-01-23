import RowClient from "../../components/admin/rowClient";
import { useState, useEffect } from "react";
const TableClient = (props) => {
  // obtener listado de clientes desde el backend
  const [clients, setClients] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setClients(data);
      });
  }, []);

  if (!clients) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="table-responsive" style={{ marginTop: "20px" }}>
      <table className="table">
        <thead alt="cabecera de la tabla">
          <tr>
            <th scope="col">Foto</th>
            <th scope="col">Nombre y Apellido</th>
            <th scope="col">Correo</th>
            <th scope="col">Rol</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <RowClient
              key={index}
              image={
                "https://i.pinimg.com/originals/8f/54/a5/8f54a5fc0fd17e1ccd35bf5229f153d9.jpg"
              }
              filname={client.fullname}
              correo={client.email}
              rol={client.rol}
              estado={"Activo"}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TableClient;
