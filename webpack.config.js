const path = require('path')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },

  devServer: {
    static: {
      directory: path.join(__dirname, '/public'),
      watch: true,
    }, headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      }
      ,
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
}