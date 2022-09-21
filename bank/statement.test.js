const Statement = require("./statement");

describe("Statement", () => {
  it("constructs", () => {
    const statement = new Statement([]);
    expect(statement.transactions).toEqual([]);
  });
  it("Returns an empty header", () => {
    const statement = new Statement();
    expect(statement.header()).toEqual(
      "\ndate || credit || debit || balance\n"
    );
  });
  it("Returns the transactions", () => {
    const statement = new Statement([["19/09/2022", 500, " ", 500]]);
    expect(statement.transactions).toEqual([["19/09/2022", 500, " ", 500]]);
  });
  it("Can return a formatted statement with a transaction", () => {
    const statement = new Statement([["19/09/2022", 500, " ", 500]]);
    expect(statement.makeStatement()).toEqual(
      "\ndate || credit || debit || balance\n19/09/2022 || 500.00 || || 500.00\n"
    );
  });
  it("Can return a formatted statement for multiple days", () => {
    let transactions = [
      ["19/09/2022", 500, " ", 500],
      ["20/09/2022", " ", 500, 0],
    ];
    const statement = new Statement(transactions);
    expect(statement.makeStatement()).toEqual(
      "\ndate || credit || debit || balance\n20/09/2022 || || 500.00 || 0.00\n19/09/2022 || 500.00 || || 500.00\n"
    );
  });
});
