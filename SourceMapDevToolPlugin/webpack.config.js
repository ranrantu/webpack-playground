const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// exclude vendor.js
const excludeVendor = {
	filename: '[name].js.map',
	exclude: ['vendor.js']
};

// out host
const outHost = {
	append: '\n//# sourceMappingURL=http://example.com/sourcemap/[url]',
  filename: '[name].map'
};

// other folder
const otherFolder = {
	filename: 'sourcemaps/[file].map',
  publicPath: 'https://example.com/project/',
  fileContext: 'public'
};

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	devtool: false,
	// devtool: 'eval',
	// devtool: 'cheap-eval-source-map',
	// optimization: {
	// 	minimizer: [
	// 		new UglifyJsPlugin({
 //        sourceMap: false
	// 		})
	// 	]
	// },
	module:{
    rules:[
      {
        test:/\.jsx?$/,
        loader:'babel-loader',
        exclude:/node_modules/,
        options:{
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-classes']
        }
      }
    ],
  },
	plugins: [
		new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        filename:'index.html',
        template:'./src/index.html'
    }),
		// new webpack.SourceMapDevToolPlugin({
			// append: '\n//# sourceMappingURL=http://localhost:8080/[url]',
			// filename: '[name].map',
			// moduleFilenameTemplate: 'webpack://./src/a.js',
			// module: false,
			// columns: false,
			// noSources: true,
			// publicPath: http://example.com/project/
			// fileContext: public
		// })
	]
}