const { DataTypes } = require("sequelize");
const sequelize = require("../db/connect");
const Flashcard = sequelize.define(
  "Flashcard",
  {
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Flashcard;
