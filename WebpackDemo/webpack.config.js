const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your React app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Output bundle file
    assetModuleFilename: 'assets/[name][ext]', // Defines output directory for assets
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use babel to transpile JavaScript files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Add Babel presets
          },
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'], // Use css-loader and style-loader
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Match image files
        type: 'asset/resource', // Webpack 5 method to handle image assets
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Allow JSX files to be resolved
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Directory to serve static files
    },
    port: 3000, // Port for localhost
    hot: true, // Enable hot module replacement
    open: true, // Automatically open the browser
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template for HTML file
    }),
  ],
};
