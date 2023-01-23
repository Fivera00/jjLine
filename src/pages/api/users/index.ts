import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "src/utils/database";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const query = "SELECT * FROM users";
        const response = await conn.query(query);
        return res.json(response.rows);
      } catch (error: any) {
        return res.status(400).json({ message: error.message });
      }
    case "POST":
      try {
        const { fullname, email, pass, rol } = body;

        const query =
          "INSERT INTO users(fullname, email, pass, rol) VALUES ($1, $2, $3, $4) RETURNING *";
        const values = [fullname, email, pass, rol];

        const response = await conn.query(query, values);

        // return res.json(response.rows[0]);
        console.log("respuestas insert", response.rows[0]);
        const user = response.rows[0];
        return res.status(200).json({
          status: true,
          message: "User created successfully",
          data: {
            email: user.email,
            nombre: user.fullname,
            rol: user.rol,
            isLogin: true,
          },
        });
      } catch (error: any) {
        return res.status(400).json({ message: error.message });
      }
    default:
      return res.status(400).json({ message: "Method are not supported" });
  }
}
