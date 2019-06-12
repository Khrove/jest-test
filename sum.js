const options = require('./configs');

function sum (a, b) {
    const prefix = options.isProduction() ? '' : `${options.getEnvironment()}: `;
    console.log(prefix);
    return a + b;
}

module.exports = sum;