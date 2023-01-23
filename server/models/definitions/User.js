const { DataTypes } = require("sequelize");

export const User = sequelize.define(
  "user",
  {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 255],
          msg: "El nombre debe tener minimo DOS(2) caracteres",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Debe ingresar un correo válido",
        },
      },
    },
    password: {
      type: DataTypes.STRING(64),
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dt_fecha_creacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    dt_fecha_actualizacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
  }
);
