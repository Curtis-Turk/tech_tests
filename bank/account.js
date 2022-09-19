class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  balance() {
    return this.balance;
  }

  transactions() {
    return this.transactions;
  }

  deposit(amount) {
    this.transactions.push(this.date());
    this.balance += amount;
  }

  withdraw(amount) {
    this.transactions.push(this.date());
    this.balance -= amount;
  }

  date() {
    return `${new Date().toLocaleDateString("en-UK")}`;
  }
}

module.exports = Account;
