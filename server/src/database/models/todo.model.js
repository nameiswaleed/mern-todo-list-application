const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const Todos = mongoose.model("Todos", TodoSchema, "Todos");

module.exports = Todos;
