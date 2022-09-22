const Statement = require("./statement");

class Account {
  constructor() {
    this.transactions = [];
  }

  getDate() {
    return `${new Date().toLocaleDateString("en-UK")}`;
  }

  checkNumber(input) {
    return isNaN(input) || input <= 0 ? true : false;
  }

  deposit(amount) {
    if (this.checkNumber(amount)) return "Deposit an amount of money";
    this.transactions.push([this.getDate(), amount, " "]);
  }

  withdraw(amount) {
    if (this.checkNumber(amount)) return "Deposit an amount of money";
    this.transactions.push([this.getDate(), " ", amount]);
  }

  print() {
    const statement = new Statement(this.transactions);
    statement.logStatement();
  }
}

module.exports = Account;
