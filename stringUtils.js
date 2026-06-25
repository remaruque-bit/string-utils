function capitalize(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function reverse(str) {
  return str.split('').reverse().join('');
}

module.exports = { capitalize, reverse };
