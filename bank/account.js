class Account {
  constructor() {
    this.balance = 0;
  }

  balance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

module.exports = Account;