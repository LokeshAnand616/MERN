const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // entry point of your React app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // output bundle file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // match both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // use babel to transpile JavaScript files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // add Babel presets
          },
        },
      },
      {
        test: /\.css$/, // regex to match CSS files
        use: ['style-loader', 'css-loader'], // use css-loader and style-loader
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Allow JSX files to be resolved
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // directory to serve static files
    },
    port: 3000, // port for localhost
    hot: true, // enable hot module replacement
    open: true, // automatically open the browser
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // template for HTML file
    }),
  ],
};
