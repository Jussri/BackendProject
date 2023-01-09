const connection = require("../db/connection");

const expenses = {
  findAll: () =>
    new Promise((resolve, reject) => {
      connection.query("SELECT * FROM expenselist;", (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
  findTotalSum: () =>
    new Promise((resolve, reject) => {
      connection.query(
        "SELECT SUM (amount) AS total from expenselist;",
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    }),
  findByAmount: (amount) =>
    new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM expenselist WHERE amount=?;",
        amount,
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    }),
  findByCategory: (category) =>
    new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM expenselist WHERE category=?;",
        category,
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    }),
  findByShop: (shop) =>
    new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM expenselist WHERE shop=?;",
        shop,
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    }),
  findByDate: (date) =>
    new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM expenselist WHERE date=?;",
        date,
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    }),
  findByMonth: (date) =>
    new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM expenselist WHERE month(date)=?;",
        date,
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    }),
  findById: (id) =>
    new Promise((resolve, reject) => {
      const selectQuery = "SELECT * FROM expenselist WHERE id=?;";
      connection.query(selectQuery, id, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
  save: (expense) =>
    new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO expenselist SET ?",
        expense,
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    }),
  deleteById: (id) =>
    new Promise((resolve, reject) => {
      const deleteQuery = "DELETE FROM expenselist WHERE id=?;";
      connection.query(deleteQuery, id, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),

  updateById: (expense) =>
    new Promise((resolve, reject) => {
      const updateQuery =
        "UPDATE expenselist SET date = ?, category = ?, shop= ?, amount =? WHERE id = ?;";
      connection.query(
        updateQuery,
        [
          expense.date,
          expense.category,
          expense.shop,
          expense.amount,
          expense.id,
        ],
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    }),
};
module.exports = expenses;
