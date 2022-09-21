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
      let credit = this.checkAmount(transaction[1]);
      let debit = this.checkAmount(transaction[2]);
      let balance = transaction[3].toFixed(2);
      this.printout += `${date} ||${credit}||${debit}|| ${balance}\n`;
    });
  }
  checkAmount(amount) {
    return amount === " " ? amount : ` ${amount.toFixed(2)} `;
  }
  logStatement() {
    this.transactions.reverse();
    this.printout = this.header();
    this.printoutTransactions();
    console.log(this.printout);
  }
}

module.exports = Statement;
