const path = require('path');
//const CopyWebpackPlugin = require('copy-webpack-plugin');

const SRC_DIR = __dirname + '/src';
const DIST_DIR = __dirname + '/dist';

module.exports = function override(config, env) {
    if (!config.plugins) {
        config.plugins = [];
    }

    return config;
}