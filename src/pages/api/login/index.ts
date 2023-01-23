import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "src/utils/database";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        const { email, password } = body;
        const text = "SELECT * FROM users WHERE email = $1 LIMIT 1";
        const values = [email];
        const result = await conn.query(text, values);

        const user = result.rows[0];
        if (!user) {
          return res.status(404).json({ message: "User Not Found" });
        }

        if (user.pass !== password) {
          return res.status(401).json({ message: "Invalid Credentials" });
        }
        return res.status(200).json({
          status: true,
          message: "Login Success",
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
};
