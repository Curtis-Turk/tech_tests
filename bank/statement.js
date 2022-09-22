class Statement {
  constructor(transactions) {
    this.transactions = transactions;
    this.printout = "";
  }

  header() {
    return "\ndate || credit || debit || balance\n";
  }

  checkAmount(amount) {
    return amount === " " ? amount : ` ${amount.toFixed(2)} `;
  }

  setZero(value) {
    return value == " " ? 0 : value;
  }

  addBalance() {
    let balance =
      this.setZero(this.transactions[0][1]) +
      this.setZero(this.transactions[0][2]);

    this.transactions.forEach((transaction) => {
      transaction.push(balance);
      console.log(transaction);
      balance += this.setZero(transaction[1]);
      balance -= this.setZero(transaction[2]);
    });
  }

  printoutTransactions() {
    this.transactions.forEach((transaction) => {
      let date = transaction[0];
      let credit = this.checkAmount(transaction[1]);
      let debit = this.checkAmount(transaction[2]);
      let balance = transaction[3].toFixed(2);
      this.printout += `${date} ||${credit}||${debit}|| ${balance}\n`;
    });
  }

  logStatement() {
    this.transactions.reverse();
    this.printout = this.header();
    this.addBalance();
    this.printoutTransactions();
    console.log(this.printout);
  }
}

module.exports = Statement;
