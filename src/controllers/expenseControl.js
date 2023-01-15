const expenses = require("../models/expenseModel");

const getExpenses = async (req, res) => {
  try {
    const response = await expenses.findAll();

    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

const getExpenseById = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const response = await expenses.findById(id);

    if (response.length === 1) {
      res.send(response[0]);
    } else {
      res.status(404).json("Id not found!");
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

const getExpenseByDate = async (req, res) => {
  const date = req.params.date;
  try {
    const response = await expenses.findByDate(date);
    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};
const getExpenseByMonth = async (req, res) => {
  const month = parseInt(req.params.date, 13);
  try {
    const response = await expenses.findByMonth(month);
    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

const getExpenseByShop = async (req, res) => {
  const shop = req.params.shop;
  try {
    const response = await expenses.findByShop(shop);
    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

const getExpenseByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const response = await expenses.findByCategory(category);
    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

const getExpenseByAmount = async (req, res) => {
  const amount = req.params.amount;
  try {
    const response = await expenses.findByAmount(amount);
    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

const createExpense = async (req, res) => {
  const expense = {
    date: req.body.date,
    category: req.body.category,
    shop: req.body.shop,
    amount: req.body.amount,
  };
  try {
    const response = await expenses.save(expense);
    if (response) {
      expense.id = response.insertId;
      res.status(201).send(expense);
    }
  } catch (e) {
    res.sendStatus(500);
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
  try {
    const result = await expenses.findById(expense.id);
    if (result.length === 0) {
      res.status(404).send("Id not found!");
      return;
    }
    const response = await expenses.updateById(expense);
    if (response) {
      res.send(expense);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

const deleteExpense = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const result = await expenses.findById(id);
    if (result.length === 0) {
      res.status(404).send("Id not found!");
      return;
    }

    const response = await expenses.deleteById(id);
    if (response.affectedRows === 1) {
      res.send("Expense deleted");
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

module.exports = {
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
