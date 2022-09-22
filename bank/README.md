# Bank tech test

## Running instructions

Fork the repo and change into the directory

Install dependancies

```
npm install
```

Run node

```
node
```

Require and initialise the account

```
const Account = require("./account");
const account = new Account();
```

To deposit or withdraw from the account

```
account.deposit(num)
account.withdraw(num)
```

To print the statement

```
account.print()
```

## Testing

To run tests

```
jest
```

To check test coverage

```
jest --coverage
```

## My approach

I initially decided to build a single account class which would take each withdrawal or deposit and push it to a trasaction array which I could then print out.

However the specification required specific formatting so I split out the formatting of the statement into it's own class. Which the account class could call to print out the transactions.

I also decided that each entry would automatically enter todays date to reduce the user inputs.

I chose to print out the statement using a console log rather than returning it to include formatting.

## Specification

### Requirements

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Example

![screenshot](./img/Screenshot%202022-09-22%20at%2011.42.47.png)
