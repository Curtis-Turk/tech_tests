const Statement = require("./statement");

class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  date() {
    return `${new Date().toLocaleDateString("en-UK")}`;
  }

  numberCheck(input) {
    return isNaN(input) || input <= 0 ? true : false;
  }

  deposit(amount) {
    if (this.numberCheck(amount)) {
      return "Deposit an amount of money";
    }
    this.balance += amount;
    this.transactions.push([this.date(), amount, 0, this.balance]);
  }

  withdraw(amount) {
    if (this.numberCheck(amount)) {
      return "Deposit an amount of money";
    }
    this.balance -= amount;
    this.transactions.push([this.date(), 0, amount, this.balance]);
  }

  print() {
    const statement = new Statement(this.transactions);
    return statement.makeStatement();
  }
}

module.exports = Account;
