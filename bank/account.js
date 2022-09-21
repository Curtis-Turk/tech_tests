const Statement = require("./statement");

class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  date() {
    return `${new Date().toLocaleDateString("en-UK")}`;
  }

  checkNumber(input) {
    return isNaN(input) || input <= 0 ? true : false;
  }

  deposit(amount) {
    if (this.checkNumber(amount)) {
      return "Deposit an amount of money";
    }
    this.balance += amount;
    this.transactions.push([this.date(), amount, " ", this.balance]);
  }

  withdraw(amount) {
    if (this.checkNumber(amount)) {
      return "Deposit an amount of money";
    }
    this.balance -= amount;
    this.transactions.push([this.date(), " ", amount, this.balance]);
  }

  print() {
    const statement = new Statement(this.transactions);
    console.log(statement.makeStatement());
  }
}

module.exports = Account;
