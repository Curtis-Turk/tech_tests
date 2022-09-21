class Statement {
  constructor(transactions) {
    this.transactions = transactions;
    this.printout = "";
  }
  header() {
    return "\ndate || credit || debit || balance\n";
  }
  printoutTransactions() {
    this.transactions.forEach((transaction) => {
      let date = transaction[0];
      let credit = transaction[1].toFixed(2);
      let debit = transaction[2].toFixed(2);
      let balance = transaction[3].toFixed(2);
      this.printout += `${date} || ${credit} || ${debit} || ${balance}\n`;
    });
  }
  makeStatement() {
    this.transactions.reverse();
    this.printout = this.header();
    this.printoutTransactions();
    return this.printout;
  }
}

module.exports = Statement;
