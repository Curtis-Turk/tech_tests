const Account = require("./account");

describe("Account", () => {
  it("starts with a 0 balance", () => {
    const account = new Account();
    expect(account.balance).toEqual(0);
  });
  it("can have money deposited to return new balance", () => {
    const account = new Account();
    account.deposit(500);
    expect(account.balance).toEqual(500);
  });
  it("can have money withdrawn", () => {
    const account = new Account();
    account.withdraw(500);
    expect(account.balance).toEqual(-500);
  });
  it("returns an empty transaction date arr", () => {
    const account = new Account();
    expect(account.transactions).toEqual([]);
  });
  it("records transactions dates", () => {
    const account = new Account();
    account.deposit(500);
    expect(account.transactions).toEqual(["19/09/2022"]);
  });
});
