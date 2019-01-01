const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const handler = (percentage, message, ...args) => {
  // e.g. Output each progress message directly to the console:
  console.info(percentage, message, ...args);
};

module.exports = {
	entry: './src/index.js',
	module:{
    rules:[
      {
        test:/\.jsx?$/,
        loader:'babel-loader',
        exclude:/node_modules/,
        options:{
          presets:[
            ['env',{modules:false}]
          ]
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename:'index.html',
        template:'./src/index.html'
    }),
    new webpack.ProgressPlugin(handler)
  ]
}