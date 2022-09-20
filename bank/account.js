const Statement = require("./statement");

class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push([this.date(), amount, 0, this.balance]);
  }

  withdraw(amount) {
    this.balance -= amount;
    this.transactions.push([this.date(), 0, amount, this.balance]);
  }

  date() {
    return `${new Date().toLocaleDateString("en-UK")}`;
  }

  print() {
    const statement = new Statement(this.transactions);
    return statement.makeStatement();
  }
}

module.exports = Account;
