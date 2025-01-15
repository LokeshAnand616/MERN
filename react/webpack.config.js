const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point for your app
  output: {
    filename: 'bundle.js',  // Output file name
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to all JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Transpiling with Babel
        },
      },
      {
        test: /\.css$/,  // Apply this rule to CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/, // Apply this rule to HTML files
        use: {
          loader: 'html-loader',  // Loads the HTML files
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Set up alias to src folder
    },
  },
};
