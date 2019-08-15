const getEnvironment = () => process.env.NODE_ENV;
const isEnvironment = environment => getEnvironment() === environment;
const isProduction = () => isEnvironment('production');

if (!process.env.NODE_ENV) {
    console.log('The \'NODE_ENV\' environment variable is not set. A valid value is required to load the application config.');
};

let environmentConfig;
try {
    environmentConfig = require(`./${process.env.NODE_ENV}`);
} catch(err) {
    console.error(`Unrecognized NODE_ENV: ${process.env.NODE_ENV}`);
    console.log('Please use the following variables: production, QA, stage');
}

module.exports = {
    getEnvironment,
    isEnvironment,
    isProduction,
    environmentConfig
};