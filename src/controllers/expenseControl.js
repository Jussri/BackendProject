const expenses = require("../models/expenseModel");

const getExpenses = async (req, res) => {
  const response = await expenses.findAll();
  //const sum = await expenses.findTotalSum();

  if (response) {
    res.send(response);
  }
};

const getAllExpenses = async (req, res) => {
  const response = await expenses.findTotalSum();
  return res.json({ data: response.data });
};

const getExpenseById = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const response = await expenses.findById(id);

  if (response.length === 1) {
    res.status(200).send(response[0]);
  } else {
    res.status(404).send("Not Found");
  }
};

const getExpenseByDate = async (req, res) => {
  const date = parseInt(req.params.date);
  const response = await expenses.findByDate(date);

  if (response) {
    res.send(response);
  }
};
const getExpenseByMonth = async (req, res) => {
  const date = parseInt(req.params.date, 13);
  const response = await expenses.findByMonth(date);

  if (response) {
    res.send(response);
  }
};

const getExpenseByShop = async (req, res) => {
  const shop = req.params.shop;
  const response = await expenses.findByShop(shop);

  if (response) {
    res.send(response);
  }
};

const getExpenseByCategory = async (req, res) => {
  const category = req.params.category;
  const response = await expenses.findByCategory(category);

  if (response) {
    res.send(response);
  }
};

const getExpenseByAmount = async (req, res) => {
  const amount = req.params.amount;
  const response = await expenses.findByAmount(amount);

  if (response) {
    res.send(response);
  }
};

const createExpense = async (req, res) => {
  const expense = {
    date: req.body.date,
    category: req.body.category,
    shop: req.body.shop,
    amount: req.body.amount,
  };
  const response = await expenses.save(expense);
  if (response) {
    expense.id = response.insertId;
    res.send(expense);
  }
};

const updateExpense = async (req, res) => {
  const expense = {
    id: req.body.id,
    date: req.body.date,
    category: req.body.category,
    shop: req.body.shop,
    amount: req.body.amount,
  };
  const response = await expenses.updateById(expense);
  if (response) {
    res.send(expense);
  }
};

const deleteExpense = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const response = await expenses.deleteById(id);
  if (response) {
    res.send("Expense deleted");
  }
};

module.exports = {
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
};
