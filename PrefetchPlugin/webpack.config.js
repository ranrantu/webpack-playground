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
    new webpack.PrefetchPlugin('./node_modules/react/index.js'),
    new webpack.PrefetchPlugin('./node_modules/react-dom/index.js'),
	  // new webpack.PrefetchPlugin(path.join(__dirname, './src/components/nav.js'))
  ]
}