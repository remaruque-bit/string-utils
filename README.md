# string-utils

A tiny collection of string helper functions, written for learning purposes.

## Functions

- `capitalize(str)` — uppercases the first letter of a string.
- `reverse(str)` — reverses a string.

## Usage

```js
const { capitalize, reverse } = require('./stringUtils');

capitalize('hello'); // "Hello"
reverse('hello');    // "olleh"
```

## Running tests

```bash
npm test
```
