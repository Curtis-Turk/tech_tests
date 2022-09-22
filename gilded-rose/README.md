# Gilded Rose

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
jest
```

To generate test coverage report

```sh
jest --coverage
```

To run all tests in watch mode

```sh
npm run test:watch
```

## My approach

I initially started by fixing the test and building on more tests to see how the system that existed functioned and whether or not it had bugs. I then gradually increased my knowledge of the nested if statements by commenting out certain lines to see how the tests would respond.

This gave me the confidence to attempt to disentangle the web by breaking bits out into their own functions, watch testing to ensure the code was still functioning.

Gradually I introduced new functionality such as a switch statement to control which functions were firing off due to the item name.

When I finally got to adding the conjured item, it was a very simple insert which would allow for more possiblities to expand in the future.

### To add new items

First make a function for your item which holds the item requirement, then add the item's name to the switch statement.
