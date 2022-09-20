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
}

let account = new Account();

account.deposit(500);
account.withdraw(500);

// account.statement();

module.exports = Account;
