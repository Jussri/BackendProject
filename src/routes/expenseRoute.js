const express = require("express");
const {
  getAllExpenses,
  createExpense,
  deleteExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
  getExpenseByMonth,
  getExpenseByShop,
  getExpenseByAmount,
  getExpenseByCategory,
  getExpenseByDate,
} = require("../controllers/expenseControl");

const router = express.Router();

router.get("/date/:date", getExpenseByDate);
router.get("/category/:category", getExpenseByCategory);
router.get("/amount/:amount", getExpenseByAmount);
router.get("/month/:date", getExpenseByMonth);
router.get("/", getExpenses, getAllExpenses);
router.get("/shop/:shop", getExpenseByShop);
router.get("/:id", getExpenseById);
router.post("/", createExpense);
router.put("/", updateExpense);
router.delete("/:id", deleteExpense);

module.exports = router;
