import CracoAlias from "craco-alias";
import StylelintWebpackPlugin from "stylelint-webpack-plugin";
//const sassResourcesLoader = require("craco-sass-resources-loader");
//const BabelRcPlugin = require("@jackwilsdon/craco-use-babelrc");
import path from "path";
import crypto from "crypto";
import { CracoConfig } from '@craco/types';

//import pkg from './package.json' assert {type: 'json'};

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

const config: CracoConfig = {
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
    css: {
      loaderOptions: (cssLoaderOptions, { env, paths }) => {
        cssLoaderOptions.modules = {
          getLocalIdent: (context: unknown, localIdentName: string, localName: string) => {
            if (localName.startsWith('key')) {
              return localName;
            }

            return `${localName}-${threeLetterHash()}`;
          },
          exportLocalsConvention: (className: string) => className.replace(/--/g, '_modifier_').replace(/-/g, '_')
        }

        return cssLoaderOptions;
      }
    },
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
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@routes': path.resolve(__dirname, 'src/routes/index'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@views': path.resolve(__dirname, 'src/views/index')
    },
    configure: (webpackConfig, { env, paths }) => {
      if (env === "production") {
        webpackConfig.devtool = false;
      } else {
        webpackConfig.devtool = 'eval-source-map';
      }

      webpackConfig.plugins?.push(
        new StylelintWebpackPlugin({
          files: '**/*.{scss,css}',
          configFile: './.stylelintrc',
        }),
      );

      // @ts-ignore
      webpackConfig.resolve.fallback = { ...webpackConfig.resolve.fallback,
        crypto: false,
        path: false
      };

      return webpackConfig;
    }
  }
};

// eslint-disable-next-line import/no-unused-modules
export default config;