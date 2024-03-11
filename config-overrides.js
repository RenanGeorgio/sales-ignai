const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const SRC_DIR = __dirname + '/src';
const DIST_DIR = __dirname + '/dist';

module.exports = function override(config, env) {
    if (!config.plugins) {
        config.plugins = [];
    }

    if (env === "production") {
        config.entry = { 
            main: paths.appIndexJs 
        };
    
        // Change css module class names in production
        const cssLoader = getLoader(
          config.module.rules,
          rule => String(rule.test) === String(/\.module\.css$/),
        ).loader.find(loader => loaderNameMatches(loader, "css-loader"));
        cssLoader.options.localIdentName = "ma-[hash:base64:8]";
    
        // Include bundle analyzation
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: false,
          }),
        );
    }

    config.plugins.push(
        (process.env.NODE_ENV === 'production') ?
        new CopyWebpackPlugin([{from: 'src/lib/legacyLib.js'}]) :
        new CopyWebpackPlugin([{from: 'src/lib/legacyLib.js', to: 'dist'}])
    );

    return config;
}