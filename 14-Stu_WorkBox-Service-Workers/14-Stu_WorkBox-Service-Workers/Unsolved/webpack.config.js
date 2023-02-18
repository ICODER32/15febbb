const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// TODO: Explain what the workbox-webpack-plugin does and why it is needed in this case
// The workbox-webpack-plugin generates a service worker file for the application which can be used to cache resources and enable offline access. It does this by integrating Workbox, a set of libraries and Node modules that make it easy to build offline web applications.
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devServer: {
    hot: true,
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dev.to Posts',
      template: './index.html',
    }),
    // TODO: add a comment explaining what the GenerateSW plugin does
    // The GenerateSW plugin generates a new service worker file that will cache all the assets in the dist folder, enabling the application to be used offline. It generates a service-worker.js file that is then included in the application.
    // TODO: add a comment explaining what the `clientsClaim` and `skipWaiting` options do
    // The clientsClaim and skipWaiting options control how the service worker is activated. The clientsClaim option allows the service worker to take control of all pages that are loaded, while the skipWaiting option allows the service worker to take over the page immediately without having to wait for the previous service worker to stop. This ensures that the latest version of the service worker is used as soon as possible.
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
