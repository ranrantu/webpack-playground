const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

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
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery'
    // })
  ]
}