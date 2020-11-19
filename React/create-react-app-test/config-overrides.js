const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = function override(config, env) {

    config.resolve.alias['@'] = path.resolve(__dirname, 'src');

    return config;
};
