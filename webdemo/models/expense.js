class Expense {
  /**
   Represents a Expense.
   @constructor
   @param {date} date - The date of the expense.
   @param {float} income - The author of the book.
      @param {number} expense - The expense amount.
   @param {string} detail - Additional details or description of the transaction.
 */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}

/**
 * Class ExpenseModel.
 * @class
 */
class ExpenseModel {
  constructor() {
    this.expenses = [];
  }

/**
 * add expense numbers passed to the function.
 * @param {float} expense - A positive number.
  * @param {number} expense.income - The income amount.
 * @param {number} expense.expense - The expense amount.
 */
  add(expense) {
    this.expenses.push(expense);
  }

/**
 * return expense numbers from stack.
 * @return {array} expense - array of positive number
 */

  getAll() {
    return this.expenses;
  }

/**
   * Calculate and return the total income.
   * @return {number} The sum of all income values.
   */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }

/**
   * Calculate and return the total expense.
   * @return {number} The sum of all expense values.
   */
  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }

/**
   * Calculate and return the remaining money.
   * @return {number} The net balance (Total Income - Total Expense).
   */
  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };
