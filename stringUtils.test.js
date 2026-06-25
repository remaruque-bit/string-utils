const assert = require('assert');
const { capitalize, reverse } = require('./stringUtils');

assert.strictEqual(capitalize('hello'), 'Hello');
assert.strictEqual(reverse('hello'), 'olleh');

console.log('All tests passed.');
