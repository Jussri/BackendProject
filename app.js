const express = require("express");
const expensesRouter = require("./src/routes/expenseRoute");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/expenses", expensesRouter);

module.exports = app;
