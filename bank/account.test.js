const Account = require("./account");

describe("Account", () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  // it("starts with a 0 balance", () => {
  //   const account = new Account();
  //   expect(account.balance).toBe(0);
  // });
  // it("can have money deposited", () => {
  //   const account = new Account();
  //   account.deposit(500);
  //   expect(account.balance).toEqual(500);
  // });
  // it("can have money withdrawn", () => {
  //   const account = new Account();
  //   account.withdraw(500);
  //   expect(account.balance).toEqual(-500);
  // });
  it("Returns an error message when depositing NaN", () => {
    const account = new Account();
    expect(account.deposit("string")).toEqual("Deposit an amount of money");
  });
  it("Returns an error message when withdrawing NaN", () => {
    const account = new Account();
    expect(account.withdraw("string")).toEqual("Deposit an amount of money");
  });
  it("Returns an error message when depositing a negative", () => {
    const account = new Account();
    expect(account.deposit(-500)).toEqual("Deposit an amount of money");
  });
  it("Returns an error message when withdrawing a negative", () => {
    const account = new Account();
    expect(account.withdraw(-500)).toEqual("Deposit an amount of money");
  });
  it("returns an empty transactions list at first", () => {
    const account = new Account();
    expect(account.transactions).toEqual([]);
  });
  it("records a whole transaction", () => {
    const mockDate = new Date("2022-09-19T00:00:00.000Z");
    jest.spyOn(global, "Date").mockImplementation(() => mockDate);
    const account = new Account();
    account.deposit(500);
    expect(account.transactions).toEqual([["19/09/2022", 500, " ", 500]]);
  });
  it("records multiple transactions", () => {
    const mockDate = new Date("2022-09-19T00:00:00.000Z");
    jest.spyOn(global, "Date").mockImplementation(() => mockDate);
    const account = new Account();
    account.deposit(500);
    account.withdraw(500);
    expect(account.transactions).toEqual([
      ["19/09/2022", 500, " ", 500],
      ["19/09/2022", " ", 500, 0],
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
      ["19/09/2022", 500, " ", 500],
      ["20/09/2022", 500, " ", 1000],
    ]);
  });
  it("Can print out a statement", () => {
    const account = new Account();
    const mockDate = new Date("2022-09-19T00:00:00.000Z");
    jest.spyOn(global, "Date").mockImplementation(() => mockDate);
    account.deposit(500);
    console.log = jest.fn();
    account.print();
    expect(console.log).toHaveBeenCalledWith(
      "\ndate || credit || debit || balance\n19/09/2022 || 500.00 || || 500.00\n"
    );
  });
  it.only("Can build the specification", () => {
    const account = new Account();
    const mockDate1 = new Date("2023-01-10T00:00:00.000Z");
    let spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate1);
    account.deposit(1000);
    spy.mockRestore();
    const mockDate2 = new Date("2023-01-13T00:00:00.000Z");
    spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate2);
    account.deposit(2000);
    spy.mockRestore();
    const mockDate3 = new Date("2023-01-14T00:00:00.000Z");
    spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate3);
    account.withdraw(500);
    spy.mockRestore();
    console.log = jest.fn();
    account.print();
    expect(console.log).toHaveBeenCalledWith(
      "\ndate || credit || debit || balance\n14/01/2023 || || 500.00 || 500.00\n13/01/2023 || 2000.00 || || 500.00\n12/01/2023 || 1000.00 || || 500.00\n"
    );
  });
});
