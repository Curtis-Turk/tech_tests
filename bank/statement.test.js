const Statement = require("./statement");

describe("Statement", () => {
  it("constructs", () => {
    const statement = new Statement([]);
    expect(statement.transactions).toEqual([]);
  });
  it("Returns an empty header", () => {
    const statement = new Statement();
    expect(statement.header()).toEqual("date || credit || debit || balance\n");
  });
  it("Can return a formatted statement with a transaction", () => {
    const statement = new Statement([["19/09/2022", 500, 0, 500]]);

    expect(statement.makeStatement()).toEqual(
      "date || credit || debit || balance\n19/09/2022 || 500.00 || 0.00 || 500.00\n"
    );
  });
});
