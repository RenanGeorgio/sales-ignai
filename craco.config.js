const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const SRC_DIR = __dirname + '\\src';
console.log(SRC_DIR);
module.exports = {
  target: 'node',
  webpack: {
    plugins: [new MiniCssExtractPlugin(
      {
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      }
    )],
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        crypto: false,
        path: false
      };

      webpackConfig.module.rules.push({
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader',
          options: {
            inline: 'fallback',
          }
        },
      });

      // webpackConfig.entry = {
      //   main: [
      //     // 'babel-polyfill',
      //     // 'whatwg-fetch',
      //     // 'abortcontroller-polyfill',
      //     // SRC_DIR + '\\polyfills/eventsource.js',
      //     // SRC_DIR + '\\polyfills/IDBIndex.js',
      //     // path.resolve(paths.appSrc, 'index.jsx'),
      //     // 'react-hot-loader/patch',
      //   ],
      // };
      return webpackConfig;
    },
  },

  style: {
    modules: {
      localIdentName: '',
    },
    css: {
      loaderOptions: (cssLoaderOptions, { env, paths }) => {
        return cssLoaderOptions;
      },
    },
    sass: {
      loaderOptions: (sassLoaderOptions, { env, paths }) => {
        return sassLoaderOptions;
      },
    },
  },
};
