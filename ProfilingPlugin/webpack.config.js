const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

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
    new webpack.debug.ProfilingPlugin(),
    // new webpack.debug.ProfilingPlugin({
    //   outputPath: 'profiling/profileEvents.json'
    // });
  ]
}