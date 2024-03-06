module.exports = {
  webpack: {
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
            // Specify other options as needed
            inline: 'fallback' // Or 'no-fallback' if preferred
          }
        }
      });
      
      return webpackConfig;
    },
  },
};
