# Running instructions

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

# Testing

To run tests

```
jest
```

To check test coverage

```
jest --coverage
```

# My approach

I initially decided to build a single account class which would take each withdrawal and
