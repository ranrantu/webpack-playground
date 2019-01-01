const NpmInstallPlugin = require('webpack-plugin-install-deps');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    // new NpmInstallPlugin(),
    new NpmInstallPlugin({
    	dev: function (module, path) {
    		console.log(module, path);
    		return [
	        "babel-preset-react-hmre",
	        "webpack-dev-middleware",
	        "webpack-hot-middleware",
	      ].indexOf(module) !== -1;
    	}
    })
  ]
}