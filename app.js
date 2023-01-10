const express = require("express");
const cors = require("cors");
const expensesRouter = require("./src/routes/expenseRoute");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.use("/api/expenses", expensesRouter);

module.exports = app;
