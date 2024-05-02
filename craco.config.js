const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const CracoCSSModules = require('craco-css-modules');

module.exports = {
  plugins: [
      { plugin: CracoCSSModules }
  ],
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
    // sass: {
    //   loaderOptions: (sassLoaderOptions, { env, paths }) => {
    //     return sassLoaderOptions;
    //   },
    // },
    sass: {
      loaderOptions: {
        // Prefer 'sass' (dart-sass) over 'node-sass' if both packages are installed.
        implementation: require('sass'),
        // Workaround for this bug: https://github.com/webpack-contrib/sass-loader/issues/804
        webpackImporter: false,
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'node_modules')],
        },
      },
    },
  }
};
