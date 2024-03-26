const CracoAlias = require("craco-alias");
//const StylelintWebpackPlugin = require("stylelint-webpack-plugin");
const sassResourcesLoader = require("craco-sass-resources-loader");
//const BabelRcPlugin = require("@jackwilsdon/craco-use-babelrc");
const path = require("path");
const crypto = require("crypto");

const devMode = (process.env.NODE_ENV === 'development');
console.log(`${ devMode ? 'development' : 'production' } mode bundle`);

function isDev() {
  return devMode;
}

function threeLetterHash() {
  const randomBytes = crypto.randomBytes(16);
  const hash = crypto.createHash('md5').update(randomBytes).digest('hex');

  return hash.substring(0, 4);
}

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json'
      }
    }
  ],
  style: {
    modules: {
      // localIdentName: '[local]-[hash:base64:3]',
    },
    postcss: {
      mode: 'extends',
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss-preset-env'),
        require('postcss-scss'),
      ],
      env: {
        stage: !isDev() ? 2 : 1,
      },
      loaderOptions: (postcssLoaderOptions, { env, paths }) => {
        return postcssLoaderOptions;
      },
    },
    css: {
      loaderOptions: (cssLoaderOptions, { env, paths }) => {

        return cssLoaderOptions;
      },
     // {
        /*modules: {
          getLocalIdent: (context, localIdentName, localName) => {
            if (localName.startsWith('key')) {
              return localName;
            }

            return `${localName}-${threeLetterHash()}`;
          },
          exportLocalsConvention: (className) =>
            className.replace(/--/g, '_modifier_').replace(/-/g, '_'),
        },*/
      //},
    },
    sass: {
      loaderOptions: (sassLoaderOptions, { env, paths }) => {
        sassLoaderOptions.implementation = require('sass');
        sassLoaderOptions.webpackImporter = false;
        
        return sassLoaderOptions;
      },
    }
  },
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@types': path.resolve(__dirname, 'src/typograph/types'),
      '@interfaces': path.resolve(__dirname, 'src/typograph/interfaces'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@libs': path.resolve(__dirname, 'src/libs'),
      '@icons': path.resolve(__dirname, 'src/icons'),
      '@assets': path.resolve(__dirname, 'src/assets')
    },
    configure: (webpackConfig, { env, paths }) => {
      if (env === "production") {
        webpackConfig.devtool = false;
      } else {
        webpackConfig.devtool = 'eval-source-map';
      }

      //webpackConfig.plugins?.push(
      //  new StylelintWebpackPlugin({
      //    files: '**/*.{scss,css}'
      //  }),
      //);

      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        crypto: false,
        path: false
      };

      return webpackConfig;
    }
  }
};