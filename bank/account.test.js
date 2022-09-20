const Account = require("./account");

describe("Account", () => {
  it("starts with a 0 balance", () => {
    const account = new Account();
    expect(account.balance).toEqual(0);
  });
  it("can have money deposited", () => {
    const account = new Account();
    account.deposit(500);
    expect(account.balance).toEqual(500);
  });
  it("can have money withdrawn", () => {
    const account = new Account();
    account.withdraw(500);
    expect(account.balance).toEqual(-500);
  });
  it("returns an empty transactions list at first", () => {
    const account = new Account();
    expect(account.transactions).toEqual([]);
  });
  it("records a whole transaction", () => {
    const mockDate = new Date("2022-09-19T00:00:00.000Z");
    const spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);
    const account = new Account();
    account.deposit(500);
    spy.mockRestore();
    expect(account.transactions).toEqual([["19/09/2022", 500, 0, 500]]);
  });
  it("records multiple transactions", () => {
    const mockDate = new Date("2022-09-19T00:00:00.000Z");
    const spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);
    const account = new Account();
    account.deposit(500);
    account.withdraw(500);
    spy.mockRestore();
    expect(account.transactions).toEqual([
      ["19/09/2022", 500, 0, 500],
      ["19/09/2022", 0, 500, 0],
    ]);
  });
  it("Can make a transaction on multiple days", () => {
    const account = new Account();
    const mockDate1 = new Date("2022-09-19T00:00:00.000Z");
    let spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate1);
    account.deposit(500);
    spy.mockRestore();
    const mockDate2 = new Date("2022-09-20T00:00:00.000Z");
    spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate2);
    account.deposit(500);
    spy.mockRestore();
    expect(account.transactions).toEqual([
      ["19/09/2022", 500, 0, 500],
      ["20/09/2022", 500, 0, 1000],
    ]);
  });
});
